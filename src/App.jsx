import { Canvas } from "@react-three/fiber";
import { Environment, Loader, OrbitControls, ScrollControls, SoftShadows } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Halloween } from "./components/Halloween";
import { Suspense, useRef, useState } from "react";
function App() {
  return (
    <>
      <Canvas
        style={{ background: "#000000" }}
        shadows
        camera={{ position: [0, 2.5, 20], fov: 42 }}
        dpr={[1, 1.5]}
      >
        <SoftShadows size={42}/>
        <OrbitControls />
        
          <Suspense fallback={<Halloween />}>
          <Halloween receiveShadow castShadow />
          </Suspense>

          <Environment
          preset="night"
            background
          blur={0.3}
          />
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
