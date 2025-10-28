"use client";

// PointsProps ko yahan se hata dein
import { Points, PointMaterial } from "@react-three/drei";
// PointsProps ko yahan se bhi hata dein
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense } from "react";
import type { Points as PointsType } from "three";

// props par koi specific type mat lagayein, ya `any` laga dein
export const StarBackground = (props: any) => { // <-- Change yahan hai
  const ref = useRef<PointsType | null>(null);

  // Use the state variable directly (potential NaN fix)
  const [spherePositions] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={spherePositions} // Use direct state variable
        frustumCulled
        {...props} // Props ko yahan spread kar diya
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// StarsCanvas component waisa hi rahega
export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);