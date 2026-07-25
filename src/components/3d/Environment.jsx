import React, { memo, useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const CORAL = '#ef4b3f';
const MOON = '#dcd8d2';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const LightingRig = memo(function LightingRig() {
  return (
    <>
      <ambientLight intensity={0.28} />
      <hemisphereLight color="#ffffff" groundColor="#080808" intensity={0.82} />
      <directionalLight position={[-3.8, 3.2, 5]} color="#ffffff" intensity={3.15} />
      <pointLight position={[4.5, -2.6, 3.2]} color={CORAL} intensity={0.25} distance={10} />
    </>
  );
});

const OrbitSystem = memo(function OrbitSystem() {
  return (
    <group rotation={[0, 0, -0.055]}>
      <mesh scale={[1, 0.57, 1]}>
        <torusGeometry args={[2.5, 0.009, 4, 220]} />
        <meshBasicMaterial color="#9a9690" transparent opacity={0.44} depthWrite={false} toneMapped={false} />
      </mesh>
      <mesh scale={[1, 0.57, 1]}>
        <torusGeometry args={[2.72, 0.004, 4, 220]} />
        <meshBasicMaterial color="#565350" transparent opacity={0.28} depthWrite={false} toneMapped={false} />
      </mesh>
    </group>
  );
});

function LunarArtifact({ reducedMotion, mobile, onReady }) {
  const groupRef = useRef(null);
  const moonRef = useRef(null);
  const texture = useTexture(asset('/assets/lunar/moon-albedo.webp'));
  const { gl } = useThree();
  const basePosition = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.anisotropy = Math.min(4, gl.capabilities.getMaxAnisotropy());
    texture.needsUpdate = true;
    onReady?.();
  }, [gl, onReady, texture]);

  useFrame((state) => {
    if (reducedMotion || !groupRef.current || !moonRef.current) return;
    const scrollRange = Math.max(window.innerHeight, 1);
    const scrollProgress = Math.min(1, Math.max(0, window.scrollY / scrollRange));
    const targetX = state.pointer.x * (mobile ? 0.055 : 0.11);
    const targetY = state.pointer.y * (mobile ? 0.035 : 0.075);

    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, basePosition.x + targetX, 0.045);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, basePosition.y + targetY, 0.045);
    moonRef.current.rotation.y = THREE.MathUtils.lerp(moonRef.current.rotation.y, -0.6 + scrollProgress * 0.42 + state.pointer.x * 0.065, 0.035);
    moonRef.current.rotation.x = THREE.MathUtils.lerp(moonRef.current.rotation.x, 0.05 - state.pointer.y * 0.035, 0.035);
  });

  return (
    <group ref={groupRef} scale={mobile ? 0.84 : 1}>
      <OrbitSystem />
      <mesh ref={moonRef} rotation={[0.05, -0.6, -0.045]} castShadow receiveShadow>
        <sphereGeometry args={[1.28, mobile ? 64 : 96, mobile ? 64 : 96]} />
        <meshStandardMaterial
          map={texture}
          color="#ffffff"
          roughness={0.92}
          metalness={0.02}
          bumpMap={texture}
          bumpScale={0.045}
          emissive="#77736f"
          emissiveMap={texture}
          emissiveIntensity={0.36}
        />
      </mesh>
      <mesh scale={1.018}>
        <sphereGeometry args={[1.28, 48, 48]} />
        <meshBasicMaterial color={MOON} transparent opacity={0.035} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

function CameraRig({ reducedMotion, mobile }) {
  const { camera } = useThree();

  useFrame((state) => {
    if (reducedMotion) return;
    const targetX = state.pointer.x * (mobile ? 0.035 : 0.08);
    const targetY = state.pointer.y * (mobile ? 0.025 : 0.055);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.035);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.035);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Environment({ reducedMotion = false, mobile = false, onReady }) {
  return (
    <>
      <LightingRig />
      <CameraRig reducedMotion={reducedMotion} mobile={mobile} />
      <LunarArtifact reducedMotion={reducedMotion} mobile={mobile} onReady={onReady} />
    </>
  );
}
