import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Edges, Html, Line, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

const accent = '#c5eb87'
const poses = [
  { yaw: -.48, tilt: .02, spread: .78, scale: 1, node: .85 },
  { yaw: -.15, tilt: -.07, spread: 1.1, scale: .92, node: 1.35 },
  { yaw: -.64, tilt: .04, spread: 1.18, scale: 1, node: .9 },
  { yaw: -.48, tilt: .06, spread: 1.42, scale: .91, node: .8 },
  { yaw: -.15, tilt: .02, spread: .78, scale: .92, node: 1.25 },
  { yaw: -.6, tilt: .05, spread: .65, scale: .84, node: .8 },
  { yaw: -.78, tilt: .01, spread: 1.12, scale: 1.02, node: .75 },
  { yaw: -.35, tilt: .03, spread: 1.55, scale: .92, node: .7 },
  { yaw: -.5, tilt: .02, spread: .82, scale: .98, node: .72 },
  { yaw: -.8, tilt: .06, spread: 1, scale: .8, node: .7 },
  { yaw: -.3, tilt: .03, spread: .72, scale: .84, node: .7 },
  { yaw: -.65, tilt: -.04, spread: .86, scale: 1.01, node: .8 },
  { yaw: -.45, tilt: .02, spread: .75, scale: .95, node: .75 },
  { yaw: -.3, tilt: .07, spread: .98, scale: 1.08, node: .85 },
]
const nodePositions = [[-3.45, .55, .7], [2.4, 1.6, -2.7], [3.35, -.65, 1], [-2.2, -1.8, 2.9]]

function Plate({ index, selected, active, onSelect, plateRef }) {
  const [hovered, setHovered] = useState(false)
  return <group ref={plateRef} onClick={e => { e.stopPropagation(); onSelect(index) }} onPointerOver={e => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer' }} onPointerOut={() => { setHovered(false); document.body.style.cursor = '' }}>
    <RoundedBox args={[4.7, .13, 3.1]} radius={.065} smoothness={2}><meshStandardMaterial color={selected || hovered ? '#263823' : '#17211b'} metalness={.65} roughness={.33} transparent opacity={.94}/><Edges color={selected || hovered ? '#dbffaa' : '#709251'} threshold={25} transparent opacity={selected || hovered ? .95 : .55}/></RoundedBox>
    <mesh position={[0, .076, 0]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[4.35, 2.76]}/><meshStandardMaterial color="#18251d" metalness={.68} roughness={.4} transparent opacity={.65}/></mesh>
    <Line points={[[-2.1, .084, 1.24], [2.1, .084, 1.24], [2.1, .084, -1.24], [-2.1, .084, -1.24], [-2.1, .084, 1.24]]} color={accent} transparent opacity={.24} lineWidth={.7}/>
    {[-1, 1].map(side => <group key={side}>{[0, 1, 2, 3].map(i => <Line key={i} points={[[side * .58, .088, -.56 + i * .36], [side * (1.05 + i * .13), .088, -.56 + i * .36], [side * (1.05 + i * .13), .088, -.95]]} color={accent} transparent opacity={.17 + i * .04} lineWidth={.8}/>)}</group>)}
    <mesh position={[0, .105, 0]}><boxGeometry args={[1.08, .065, 1.05]}/><meshStandardMaterial color="#a1c977" emissive={accent} emissiveIntensity={selected ? .55 : .19} metalness={.5} roughness={.25}/><Edges color="#d6ffaa" transparent opacity={.7}/></mesh>
    <mesh position={[0, .151, 0]}><boxGeometry args={[.62, .028, .61]}/><meshStandardMaterial color="#d7ffae" emissive={accent} emissiveIntensity={selected ? 1 : .45}/></mesh>
    {[0, 1, 2, 3, 4, 5, 6].map(i => <mesh key={i} position={[-1.67 + i * .19, .12 + (active === 5 ? .2 + Math.sin(i + index) * .1 : 0), .88]}><boxGeometry args={[.07, active === 5 ? .4 + Math.sin(i + index) * .2 : .035, .2]}/><meshStandardMaterial color={i % 3 ? '#577740' : accent} emissive={accent} emissiveIntensity={i % 3 ? .02 : .25}/></mesh>)}
    <mesh position={[1.61, .106, -.89]} rotation={[-Math.PI / 2, 0, 0]}><ringGeometry args={[.14, .16, 28]}/><meshBasicMaterial color={accent} transparent opacity={.55}/></mesh>
    <Html position={[-2.25, -.15, 1.61]} transform rotation={[0, 0, 0]} distanceFactor={8} style={{ pointerEvents: 'none' }}><span className="plate-label">{['DATA / 01', 'PROCESS / 02', 'INSIGHT / 03'][index]}</span></Html>
  </group>
}

function World({ scrollState, active, tenant, layer, phase, onSelect, onNodeSelect, onReady }) {
  const root = useRef()
  const plates = useRef([])
  const nodes = useRef([])
  const particles = useRef([])
  const core = useRef()
  const shield = useRef()
  const timeline = useRef()
  const visible = useRef(true)
  const { gl } = useThree()
  const target = useRef({ ...poses[0] })
  const particlePaths = useMemo(() => nodePositions.map(pos => new THREE.CatmullRomCurve3([new THREE.Vector3(...pos), new THREE.Vector3(pos[0] * .65, pos[1], pos[2] * .65), new THREE.Vector3(0, .1, 0)])), [])
  const vector = useMemo(() => new THREE.Vector3(), [])
  useEffect(() => {
    onReady()
    const change = () => { visible.current = !document.hidden }
    document.addEventListener('visibilitychange', change)
    return () => { document.removeEventListener('visibilitychange', change); document.body.style.cursor = '' }
  }, [gl])
  useFrame((state, delta) => {
    if (!visible.current || !root.current) return
    const amount = Math.min(scrollState.current.progress, poses.length - 1)
    const index = Math.floor(amount)
    const ratio = THREE.MathUtils.smoothstep(amount - index, 0, 1)
    const next = poses[Math.min(index + 1, poses.length - 1)]
    for (const key of Object.keys(poses[0])) target.current[key] = THREE.MathUtils.lerp(poses[index][key], next[key], ratio)
    const damp = (value, to) => THREE.MathUtils.damp(value, to, 3.2, Math.min(delta, .05))
    root.current.rotation.y = damp(root.current.rotation.y, target.current.yaw)
    root.current.rotation.x = damp(root.current.rotation.x, target.current.tilt)
    root.current.scale.setScalar(damp(root.current.scale.x, target.current.scale))
    root.current.position.y = Math.sin(state.clock.elapsedTime * .37) * .055
    plates.current.forEach((plate, i) => {
      if (!plate) return
      const timelinePose = active === 9
      const tenantsPose = active === 3
      plate.position.y = damp(plate.position.y, timelinePose ? -.4 + i * .12 : (i - 1) * target.current.spread)
      plate.position.x = damp(plate.position.x, timelinePose ? (i - 1) * 1.6 : tenantsPose ? (i - 1) * .45 + (tenant === 'B' ? -.15 : .15) : 0)
      plate.position.z = damp(plate.position.z, timelinePose ? (i - 1) * -.72 : 0)
      const size = timelinePose ? .52 : tenantsPose && (tenant === 'A' ? i === 2 : i === 0) ? 1.025 : 1
      plate.scale.setScalar(damp(plate.scale.x, size))
    })
    nodes.current.forEach((node, i) => {
      if (!node) return
      node.position.set(...nodePositions[i].map(n => n * target.current.node))
      node.position.y += Math.sin(state.clock.elapsedTime * .55 + i) * .07
      const to = active === 9 || active === 7 || active === 8 ? .35 : 1
      node.scale.setScalar(damp(node.scale.x, to))
    })
    particles.current.forEach((particle, i) => {
      if (!particle) return
      particlePaths[i % 4].getPoint((state.clock.elapsedTime * .13 + Math.floor(i / 4) * .34) % 1, vector)
      particle.position.copy(vector).multiplyScalar(target.current.node)
      particle.visible = active !== 9 && active !== 7
    })
    core.current.scale.y = damp(core.current.scale.y, active === 9 ? .08 : target.current.spread)
    core.current.material.opacity = active === 6 ? .25 : .12
    shield.current.scale.setScalar(damp(shield.current.scale.x, active === 8 ? 1 : .01))
    shield.current.rotation.y += delta * .045
    timeline.current.scale.setScalar(damp(timeline.current.scale.x, active === 9 ? 1 : .01))
    const cameraZ = active === 3 || active === 7 ? 10.9 : active === 6 ? 9.7 : 10.3
    state.camera.position.z = damp(state.camera.position.z, cameraZ)
    state.camera.position.y = damp(state.camera.position.y, active === 9 ? 5.5 : active === 7 ? 5.9 : 5)
    state.camera.lookAt(0, 0, 0)
  })
  return <>
    <ambientLight intensity={1.45}/><directionalLight position={[4, 7, 3]} intensity={3.4} color="#d8edcf"/><directionalLight position={[-5, 2, -4]} intensity={2.5} color="#729a66"/><pointLight position={[0, 1, 1]} intensity={9} distance={7} color={accent}/>
    <group ref={root} rotation={[.02, -.48, 0]}>
      {[0, 1, 2].map(i => <Plate key={i} index={i} selected={active === 3 ? tenant === 'A' ? i === 2 : i === 0 : i === layer % 3} active={active} onSelect={onSelect} plateRef={el => { plates.current[i] = el }}/>) }
      <mesh ref={core}><boxGeometry args={[.34, 3.1, .34]}/><meshBasicMaterial color={accent} transparent opacity={.12} depthWrite={false}/></mesh>
      {nodePositions.map((pos, i) => <group key={i} ref={el => { nodes.current[i] = el }} position={pos} onClick={e => { e.stopPropagation(); onNodeSelect(['Meta', 'Instagram', 'LinkedIn', 'GA4'][i]) }} onPointerOver={() => { document.body.style.cursor = 'pointer' }} onPointerOut={() => { document.body.style.cursor = '' }}><RoundedBox args={[.66, .13, .66]} radius={.065} smoothness={2}><meshStandardMaterial color="#21321e" metalness={.7} roughness={.3}/><Edges color="#a6d079" transparent opacity={.55}/></RoundedBox><Html center position={[0, .17, 0]} style={{ pointerEvents: 'none' }}><span className="node-label">{['META', 'IG', 'in', 'GA4'][i]}</span></Html></group>)}
      {particlePaths.map((path, i) => <Line key={i} points={path.getPoints(25)} color={accent} lineWidth={.6} transparent opacity={active === 4 ? .34 : .14}/>) }
      {Array.from({ length: 12 }, (_, i) => <mesh key={i} ref={el => { particles.current[i] = el }}><sphereGeometry args={[.025, 6, 6]}/><meshBasicMaterial color="#ddffb4"/></mesh>)}
      <group ref={shield} scale={.01}><mesh><boxGeometry args={[5.6, 3.8, 4.1]}/><meshBasicMaterial color={accent} transparent opacity={.012} depthWrite={false}/><Edges color={accent} transparent opacity={.3}/></mesh>{[-1, 1].map(x => <mesh key={x} position={[x * 2.8, 0, 0]}><boxGeometry args={[.016, 3.8, 4.1]}/><meshBasicMaterial color={accent} transparent opacity={.06}/></mesh>)}</group>
      <group ref={timeline} scale={.01}><Line points={[[-3.4, -.7, 2.3], [3.4, -.7, 2.3]]} color={accent} lineWidth={1} transparent opacity={.5}/>{Array.from({ length: 6 }, (_, i) => <group key={i} position={[-3.2 + i * 1.28, -.7, 2.3]} onClick={e => { e.stopPropagation(); onSelect(i) }}><mesh><sphereGeometry args={[phase === i ? .15 : .075, 12, 12]}/><meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={phase === i ? .9 : .15}/></mesh><Line points={[[0, 0, 0], [0, .55 + i * .11, 0]]} color={accent} transparent opacity={.25}/></group>)}</group>
    </group>
  </>
}

export default function Scene(props) {
  const [visible, setVisible] = useState(!document.hidden)
  useEffect(() => {
    const change = () => setVisible(!document.hidden)
    document.addEventListener('visibilitychange', change)
    return () => document.removeEventListener('visibilitychange', change)
  }, [])
  return <Canvas frameloop={visible ? 'always' : 'never'} camera={{ position: [5.7, 5, 10.3], fov: 38, near: .1, far: 60 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }} onCreated={({ gl }) => { gl.domElement.addEventListener('webglcontextlost', event => { event.preventDefault(); props.onError() }, { once: true }); gl.setClearColor('#0b0f10', 0) }} fallback={null}><World {...props}/></Canvas>
}
