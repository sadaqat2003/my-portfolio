import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={[2.5, 0, 0]}>
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
}

function AnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <Torus ref={meshRef} args={[0.8, 0.3, 32, 64]} position={[-2.5, 1, -1]}>
        <meshStandardMaterial color="#8b5cf6" metalness={0.9} roughness={0.1} transparent opacity={0.6} />
      </Torus>
    </Float>
  );
}

function AnimatedOctahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={2.5}>
      <Octahedron ref={meshRef} args={[0.6]} position={[0, -1.5, 0.5]}>
        <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} transparent opacity={0.5} wireframe />
      </Octahedron>
    </Float>
  );
}

export default function FloatingScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#06b6d4" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#8b5cf6" />
        <AnimatedSphere />
        <AnimatedTorus />
        <AnimatedOctahedron />
      </Canvas>
    </div>
  );
}
