
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  useGLTF,
  Html,
} from "@react-three/drei";

function BurgerModel() {
  const { scene } = useGLTF("/models/burger.glb");

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, 0, 0]}
    />
  );
}

function LoadingBurger() {
  return (
    <Html center>
      <div
        style={{
          color: "#d4af65",
          fontSize: "14px",
          whiteSpace: "nowrap",
        }}
      >
        Loading 3D Burger...
      </div>
    </Html>
  );
}

export default function Burger3D() {
  return (
    <div className="hero-3d-burger">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />
        <pointLight
          position={[-4, 2, 3]}
          intensity={1.5}
          color="#ffc766"
        />

        <Suspense fallback={<LoadingBurger />}>
          <Stage
            environment="city"
            intensity={0.8}
            adjustCamera
          >
            <BurgerModel />
          </Stage>
        </Suspense>

        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom={true}
          minDistance={2}
          maxDistance={8}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/burger.glb");
