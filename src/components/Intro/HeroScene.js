import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Image, Lightformer, RoundedBox, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const W = 1.8; // screen size in scene units, 3:2 like the captures
const H = 1.2;
const RADIUS = 2.6;
const TILT = 0.4; // ring seen slightly from above so the core stays visible
const DOTS = ['#1f5bff', '#38bdf8', '#c9d5e6'];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Screen({ project, angle, onOpen, paused }) {
  const lift = useRef();
  const hovered = useRef(false);
  const texture = useTexture(project.images[0]);
  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame((_, dt) => {
    const target = hovered.current ? RADIUS + 0.45 : RADIUS;
    lift.current.position.z = THREE.MathUtils.damp(lift.current.position.z, target, 6, dt);
  });

  const setHover = (on) => {
    hovered.current = on;
    paused.current = on;
    document.body.style.cursor = on ? 'pointer' : '';
  };

  return (
    <group rotation-y={angle}>
      <group
        ref={lift}
        position-z={RADIUS}
        onClick={(e) => {
          e.stopPropagation();
          setHover(false);
          onOpen(project);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHover(true);
        }}
        onPointerOut={() => setHover(false)}
      >
        <RoundedBox args={[W + 0.14, H + 0.36, 0.08]} radius={0.05} smoothness={4} position-y={0.11}>
          <meshStandardMaterial color="#ffffff" roughness={0.45} />
        </RoundedBox>
        {DOTS.map((color, i) => (
          <mesh key={color} position={[-W / 2 + 0.08 + i * 0.1, H / 2 + 0.145, 0.041]}>
            <circleGeometry args={[0.032, 20]} />
            <meshBasicMaterial color={color} toneMapped={false} />
          </mesh>
        ))}
        <Image texture={texture} scale={[W, H]} radius={0.035} position-z={0.041} toneMapped={false} />
      </group>
    </group>
  );
}

// A glossy "</>" built from rounded bars: the web developer's mark at the centre of the ring.
function Core() {
  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#1f5bff',
        roughness: 0.16,
        metalness: 0.15,
        clearcoat: 1,
        clearcoatRoughness: 0.06,
      }),
    []
  );
  const a = THREE.MathUtils.degToRad(38);
  const d = 0.32;
  const bars = [
    { length: 0.86, position: [-1.05 + d * Math.cos(a), d * Math.sin(a), 0], rotation: a },
    { length: 0.86, position: [-1.05 + d * Math.cos(a), -d * Math.sin(a), 0], rotation: -a },
    { length: 0.86, position: [1.05 - d * Math.cos(a), d * Math.sin(a), 0], rotation: -a },
    { length: 0.86, position: [1.05 - d * Math.cos(a), -d * Math.sin(a), 0], rotation: a },
    { length: 1.7, position: [0, 0, 0], rotation: THREE.MathUtils.degToRad(68) },
  ];

  return (
    <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.8}>
      <group position-y={0.35} scale={0.82}>
        {bars.map((bar, i) => (
          <RoundedBox
            key={i}
            args={[bar.length, 0.24, 0.24]}
            radius={0.1}
            smoothness={6}
            position={bar.position}
            rotation-z={bar.rotation}
            material={material}
          />
        ))}
      </group>
    </Float>
  );
}

function Stage({ projects, onOpen }) {
  const scaler = useRef();
  const root = useRef();
  const ring = useRef();
  const paused = useRef(false);
  const intro = useRef(0);
  const speed = useRef(0);
  const width = useThree((state) => state.viewport.width);

  useFrame((state, dt) => {
    intro.current = THREE.MathUtils.damp(intro.current, 1, 2.2, dt);
    // Fast spin that settles on load, then a slow drift that stops while a screen is hovered.
    const cruise = reducedMotion || paused.current ? 0 : 0.14;
    speed.current = THREE.MathUtils.damp(speed.current, cruise, 3, dt);
    ring.current.rotation.y += dt * (speed.current + (reducedMotion ? 0 : 1.6 * (1 - intro.current)));
    root.current.rotation.x = THREE.MathUtils.damp(root.current.rotation.x, TILT - state.pointer.y * 0.12, 4, dt);
    root.current.rotation.z = THREE.MathUtils.damp(root.current.rotation.z, state.pointer.x * 0.06, 4, dt);
    scaler.current.scale.setScalar(Math.min(1.12, width / 5.9) * (0.75 + 0.25 * intro.current));
  });

  return (
    <group ref={scaler}>
      <Core />
      <group ref={root}>
        <group ref={ring}>
          <Suspense fallback={null}>
            {projects.map((project, i) => (
              <Screen
                key={project.folder}
                project={project}
                angle={(i / projects.length) * Math.PI * 2}
                onOpen={onOpen}
                paused={paused}
              />
            ))}
          </Suspense>
        </group>
      </group>
    </group>
  );
}

const HeroScene = ({ projects, onOpen, active }) => (
  <Canvas
    className="hero-canvas"
    dpr={[1, 1.75]}
    camera={{ position: [0, 0, 9], fov: 38 }}
    frameloop={active ? 'always' : 'never'}
    style={{ touchAction: 'pan-y' }}
  >
    <fog attach="fog" args={['#f5f8fc', 8.5, 14]} />
    <ambientLight intensity={0.9} />
    <directionalLight position={[3, 6, 5]} intensity={1.6} />
    <Environment resolution={256}>
      <Lightformer form="rect" intensity={3} position={[0, 4, 6]} scale={[10, 3, 1]} />
      <Lightformer form="rect" intensity={2} color="#bfe8ff" position={[-6, 1, 2]} rotation-y={Math.PI / 2} scale={[8, 3, 1]} />
      <Lightformer form="circle" intensity={4} position={[5, 3, 3]} scale={2} />
    </Environment>
    <Stage projects={projects} onOpen={onOpen} />
  </Canvas>
);

export default HeroScene;
