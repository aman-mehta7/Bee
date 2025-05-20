import { Canvas } from "@react-three/fiber";
import React, { useEffect,useRef,useState } from "react";
import Bee from "../3d/Bee";
import Lenis from "@studio-freight/lenis";
import { OrbitControls, PerspectiveCamera, Sphere } from "@react-three/drei";
import * as THREE from "three";




const Model = () => {


  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.03, // Lower = smoother (but slower response)
      touchMultiplier: 1.5, // Optional: increase scroll speed on touch
      duration: 1.2, // Optional: override speed of scrollTo (for jumps)
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


  const camera = useRef();
  const [cameraPosition, setCameraPosition] = useState([0, 5, 10]);
  const [cameraRotation, setCameraRotation] = useState([0, 0, 0]);
  const [cameraZoom, setCameraZoom] = useState(45);
  const [cameraTarget, setCameraTarget] = useState([0, 0, 0]);



  const [childData, setChildData] = useState('');

  const handleDataFromChild = (data) => {
    setChildData(data);
  };


  return (
    <div id="bee" className="h-[500vh] w-full bg-gray-700">
      <div className=" fixed h-[100vh] w-full bg-neutral-700">
        <Canvas>
          <OrbitControls
            enableDamping={false}
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
          />
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 10]} intensity={5} />

          <PerspectiveCamera
            ref={camera}
            position={[0, 5, 10]}
            fov={45}
            far={1000}
            near={0.1}
            makeDefault
          />

          <group>
            <Sphere args={[100, 100, 100]}>
              <meshStandardMaterial color="green" side={THREE.BackSide} />
            </Sphere>
          </group>

          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color="yellow" />
          </mesh>

          <group position={[0, 0, 0]} scale={0.15} rotation={[0, -5, 0]}>
            <Bee onSentData={handleDataFromChild} />
          </group>
        </Canvas>
      </div>
    </div>
  );
};

export default Model;
