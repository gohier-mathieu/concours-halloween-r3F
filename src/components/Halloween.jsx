/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/models/halloween.glb -o src/components/Halloween.jsx -r public 
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, useScroll, MeshPortalMaterial, Environment, Clouds, Cloud, MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
import { performAnimation } from './AnimationStart';
import * as THREE from 'three';
import { gsap } from 'gsap';

function addMetalnessToMaterial(material, metalness, roughness) {
  if (material) {
    if (material.metalness === 0 && material.roughness > 0.001) {
      material.metalness = metalness;
      material.roughness = roughness;
    }
  }
}

export function Halloween(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/halloweenCompressed.glb')
  const { actions } = useAnimations(animations, group)

  const roomRef = useRef();
  const citTopRef = useRef();
  const citBottomRef = useRef();
  const oeilRef = useRef();
  const pointLight2Ref = useRef();
  const touilletteRef = useRef();
  const citrouille = useRef();
  const cloudRef = useRef();
  const [isToggled, setIsToggled] = useState(false);
  
  const handleClick = () => {

    setIsToggled(!isToggled);
    performAnimation(
      isToggled,
      citTopRef,
      citBottomRef,
      roomRef,
    );

    setTimeout(() => {
      if (isToggled) {
        pointLight2Ref.current.intensity = 40;
        pointLight2Ref.current.color = new THREE.Color("white");
      } else {
        pointLight2Ref.current.intensity = 40;
        pointLight2Ref.current.color = new THREE.Color("red");
      }
    }, 1000);

    
  };

  useFrame(() => {
    if (isToggled) {
      if (touilletteRef.current) {
        touilletteRef.current.rotation.y += 0.01;
      }
    }
  });

  React.useEffect(() => {
    const tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });

    tl.to(oeilRef.current.rotation, {
      y: 0.35,
      delay: 3,
      duration: 2,
      ease: "power1.inOut",
    });
    tl.to(oeilRef.current.rotation, {
      y: -0.8,
      delay: 3,
      duration: 2,
      ease: "power1.inOut",
    });
    tl.to(oeilRef.current.rotation, {
      x: 0.2,
      y: -0.8,
      delay: 3,
      duration: 2,
      ease: "power1.inOut",
    });
    tl.to(oeilRef.current.rotation, {
      x: -0.2,
      y: -0.8,
      delay: 3,
      duration: 2,
      ease: "power1.inOut",
    });
    tl.to(oeilRef.current.rotation, {
      y: 0,
      x: -0.2,
      delay: 1,
      duration: 3,
      ease: "power1.inOut",
    });

    tl.play();
  });

  for (const key in materials) {
    addMetalnessToMaterial(materials[key], 0.1, 0.4);
  }


  return (
    <group ref={group} {...props} dispose={null} onClick={handleClick} receiveShadow>
      <group name="Scene">

        <ambientLight intensity={0.6} color={"white"} position={[]} />

        <group ref={citrouille}>
          <pointLight
            ref={pointLight2Ref}
            position={[0, 8, 5]}
            intensity={40}
            color={"white"}
            castShadow
            receiveShadow
          />

          <mesh name="citBottom" ref={citBottomRef} geometry={nodes.citBottom.geometry} material={materials.citrouilleOrange} >
            <Clouds material={THREE.MeshBasicMaterial} ref={cloudRef} position={[0, 0, 1]} volume={8}>
              <Cloud
                segments={40}
                bounds={[2, 0.5, 3.6]}
                volume={8}
                color="orange"
                
              />
            </Clouds>
            </mesh>
          <group name="citTop" ref={citTopRef}>
            <mesh name="Sphere010" geometry={nodes.Sphere010.geometry} material={materials.citrouilleOrange} />
            <mesh name="Sphere010_1" geometry={nodes.Sphere010_1.geometry} material={materials.citrouillevert} />
          </group>
          
        </group>
        <group ref={roomRef} rotation={[0, Math.PI / 4, 0]} position={[0, -2, 0]} scale={[0, 0, 0]} >
          <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials['Material.002']} position={[-0.286, 0.568, 6.454]} />
          <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['Material.002']} position={[-0.283, 1.52, 5.952]} />
          <mesh name="floor" geometry={nodes.floor.geometry} material={materials.floor} position={[-0.041, 0.083, 0.001]}  castShadow/>
          <mesh name="wall1" geometry={nodes.wall1.geometry} material={materials.wall} position={[7.533, 1.016, -0.5]} />
          <mesh name="wall2" geometry={nodes.wall2.geometry} material={materials.wall} position={[0.533, 1.016, -7.5]} rotation={[0, -1.571, 0]} />
          <group name="Cylinder001" position={[5.731, 3.218, -5.707]} rotation={[0, Math.PI / 4, -Math.PI / 2]}>
            <mesh name="Cylinder003_1" geometry={nodes.Cylinder003_1.geometry} material={materials.or} />
            <mesh name="Cylinder003_2" geometry={nodes.Cylinder003_2.geometry} material={materials.os} />
            <mesh name="Cylinder003_3" geometry={nodes.Cylinder003_3.geometry} material={materials.corde} />
          </group>
          <group name="Cylinder" position={[4.681, 0.197, 5.984]} rotation={[Math.PI, -Math.PI / 4, Math.PI]}>
            <mesh name="Cylinder004_1" geometry={nodes.Cylinder004_1.geometry} material={materials.or} />
            <mesh name="Cylinder004_2" geometry={nodes.Cylinder004_2.geometry} material={materials.floor} />
          </group>
          <group name="Cube" position={[4.613, 3.409, 5.981]} rotation={[0, -Math.PI / 4, 0.88]}>
            <mesh name="Cube004_1" geometry={nodes.Cube004_1.geometry} material={materials.boook} />
            <mesh name="Cube004_2" geometry={nodes.Cube004_2.geometry} material={materials.page} />
          </group>
          <group name="GP_Layer001" position={[-3.119, 2.316, -1.312]}>
            <mesh name="GP_Layer001_1" geometry={nodes.GP_Layer001_1.geometry} material={materials.satan} />
            <mesh name="GP_Layer001_2" geometry={nodes.GP_Layer001_2.geometry} material={materials.table} />
          </group>
          <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.table} position={[-2.974, 1.671, -3.57]} rotation={[-3.142, 1.56, 1.571]} />
          <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials.table} position={[-0.914, 1.671, -1.929]} rotation={[0, 0.276, -Math.PI / 2]} />
          <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials.table} position={[-5.395, 1.671, -1.987]} rotation={[-Math.PI, 0.483, Math.PI / 2]} />
          <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials.table} position={[-4.383, 1.671, 0.54]} rotation={[-Math.PI, -0.981, Math.PI / 2]} />
          <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials.table} position={[-1.604, 1.671, 0.532]} rotation={[0, -0.775, -Math.PI / 2]} />
          <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={materials.bougie} position={[-3.289, 2.672, -1.041]} />
          <mesh name="Cylinder003" geometry={nodes.Cylinder003.geometry} material={materials.bougie} position={[-3.162, 2.621, -1.456]} />
          <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={materials.bougie} position={[-2.811, 2.468, -1.041]} />
          <mesh name="Cylinder008" geometry={nodes.Cylinder008.geometry} material={materials.liege} position={[5.901, 3.946, -1.855]} rotation={[Math.PI, 0, Math.PI]} />
          <group name="Cube007" position={[-0.931, 0.687, -6.38]} rotation={[0, 1.571, 0]}>
            <mesh name="Cube002_1" geometry={nodes.Cube002_1.geometry} material={materials.coffre} />
            <mesh name="Cube002_2" geometry={nodes.Cube002_2.geometry} material={materials.coffrearma} />
          </group>
          <group name="Cylinder007" position={[-4.122, 4.022, -6.618]} rotation={[-1.571, 0.038, -1.562]}>
            <mesh name="Cylinder009_1" geometry={nodes.Cylinder009_1.geometry} material={materials.manche} />
            <mesh name="Cylinder009_2" geometry={nodes.Cylinder009_2.geometry} material={materials.paille} />
            <mesh name="Cylinder009_3" geometry={nodes.Cylinder009_3.geometry} material={materials.balaiscircle} />
          </group>
          <group name="Cylinder005" position={[-2.53, 5.395, -6.704]} rotation={[1.552, 0.233, 1.599]}>
            <mesh name="Cylinder013_1" geometry={nodes.Cylinder013_1.geometry} material={materials.manche2} />
            <mesh name="Cylinder013_2" geometry={nodes.Cylinder013_2.geometry} material={materials.balais2} />
            <mesh name="Cylinder013_3" geometry={nodes.Cylinder013_3.geometry} material={materials.balaiscircle} />
          </group>
          <mesh name="Cylinder009" geometry={nodes.Cylinder009.geometry} material={materials.coffrearma} position={[-2.844, 5.141, -6.825]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Cylinder010" geometry={nodes.Cylinder010.geometry} material={materials.coffrearma} position={[-5.129, 5.141, -6.825]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Cylinder011" geometry={nodes.Cylinder011.geometry} material={materials.coffrearma} position={[-3.467, 3.764, -6.682]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Cylinder012" geometry={nodes.Cylinder012.geometry} material={materials.coffrearma} position={[-1.585, 3.764, -6.682]} rotation={[Math.PI / 2, 0, 0]} />
          <group name="Cube008" position={[5.999, 1.5, -0.74]}>
            <mesh name="Cube003_1" geometry={nodes.Cube003_1.geometry} material={materials.table} />
            <mesh name="Cube003_2" geometry={nodes.Cube003_2.geometry} material={materials.os} />
          </group>
          <group name="Cube010" position={[6.279, 5.031, 0.853]}>
            <mesh name="Cube011_1" geometry={nodes.Cube011_1.geometry} material={materials.pagebook} />
            <mesh name="Cube011_2" geometry={nodes.Cube011_2.geometry} material={materials.bluebook} />
          </group>
          <group name="Cube011" position={[6.311, 4.924, 0.518]}>
            <mesh name="Cube014" geometry={nodes.Cube014.geometry} material={materials.bluebook2} />
            <mesh name="Cube014_1" geometry={nodes.Cube014_1.geometry} material={materials.pagebook} />
          </group>
          <group name="Cube013" position={[6.311, 5.08, 0.135]}>
            <mesh name="Cube016" geometry={nodes.Cube016.geometry} material={materials.greenbook} />
            <mesh name="Cube016_1" geometry={nodes.Cube016_1.geometry} material={materials.pagebook} />
          </group>
          <group name="Cube015" position={[6.311, 5.098, -0.61]} rotation={[0.705, 0, 0]}>
            <mesh name="Cube018_1" geometry={nodes.Cube018_1.geometry} material={materials.liege} />
            <mesh name="Cube018_2" geometry={nodes.Cube018_2.geometry} material={materials.pagebook} />
          </group>
          <group name="Cube018" position={[6.311, 5.023, -1.183]} rotation={[0.698, 0, 0]}>
            <mesh name="Cube021" geometry={nodes.Cube021.geometry} material={materials.pagebook} />
            <mesh name="Cube021_1" geometry={nodes.Cube021_1.geometry} material={materials.boook} />
          </group>
          <mesh name="Cylinder013" geometry={nodes.Cylinder013.geometry} material={materials.coffrearma} position={[6.736, 6.079, 3.847]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
          <mesh name="Cylinder016" geometry={nodes.Cylinder016.geometry} material={materials.coffrearma} position={[1.304, 6.079, -6.722]} rotation={[Math.PI / 2, 0, 0]} />
          <group name="Sphere004" position={[3.635, 1.878, 4.22]} rotation={[Math.PI, -0.619, Math.PI]}>
            <mesh name="Sphere032" geometry={nodes.Sphere032.geometry} material={materials.habit} />
            <mesh name="Sphere032_1" geometry={nodes.Sphere032_1.geometry} material={materials.witch} />
            <mesh name="Sphere032_2" geometry={nodes.Sphere032_2.geometry} material={materials.oeilblanc} />
            <mesh name="Sphere032_3" geometry={nodes.Sphere032_3.geometry} material={materials.oeilnoir} />
            <mesh name="Sphere032_4" geometry={nodes.Sphere032_4.geometry} material={materials.hair} />
            <mesh name="Sphere032_5" geometry={nodes.Sphere032_5.geometry} material={materials.levre} />
            <mesh name="Sphere032_6" geometry={nodes.Sphere032_6.geometry} material={materials.noir} />
            <mesh name="Sphere032_7" geometry={nodes.Sphere032_7.geometry} material={materials.bluebook} />
            <mesh name="Sphere032_8" geometry={nodes.Sphere032_8.geometry} material={materials.or} />
          </group>
          <mesh receiveShadow castShadow
            name="mirrorInt"
            geometry={nodes.mirrorInt.geometry}
            material={materials.Reflect}
            position={[5.623, 3.232, -5.624]}
            rotation={[0, Math.PI / 4, -Math.PI / 2]}
          >
            <MeshPortalMaterial>
              <pointLight position={[-3, -8, 0]} intensity={60} color="#0000ff" />
              <Environment preset="night" />
              <mesh receiveShadow castShadow>
                <mesh receiveShadow castShadow
                  name="skull"
                  geometry={nodes.skull.geometry}
                  material={materials.os}
                  rotation={[Math.PI, 0, Math.PI / 2]}
                  scale={1.8}
                />
              </mesh>
            </MeshPortalMaterial>
          </mesh>
          <group name="lightLeft" position={[1.283, 5.14, -6.585]} rotation={[0, 1.571, 0]}>
            <pointLight
              position={[0, 0, 0]}
              intensity={9}
              color="red"
              castShadow
            receiveShadow
            />
            <mesh name="Cylinder006" geometry={nodes.Cylinder006.geometry} material={materials['Material.003']} />
            <mesh name="Cylinder006_1" geometry={nodes.Cylinder006_1.geometry} material={materials.coffrearma} />
          </group>
          <group name="lightRight" position={[6.564, 5.14, 3.85]}>
            <pointLight
              position={[0, 0, 0]}
              intensity={9}
              color="red"
              castShadow
            receiveShadow
            />
            <mesh name="Cylinder025" geometry={nodes.Cylinder025.geometry} material={materials['Material.003']} />
            <mesh name="Cylinder025_1" geometry={nodes.Cylinder025_1.geometry} material={materials.coffrearma} />
          </group>
          {/*<mesh name="liquidBocal" geometry={nodes.liquidBocal.geometry} material={materials.liquidBocal} position={[5.901, 3.358, -1.855]} rotation={[Math.PI, 0, Math.PI]} />*/}
          <group name="oeil" ref={oeilRef} position={[5.901, 3.358, -1.864]} rotation={[Math.PI, 0, Math.PI]}>
            <mesh name="Sphere005" geometry={nodes.Sphere005.geometry} material={materials.oeilblanc} />
            <mesh name="Sphere005_1" geometry={nodes.Sphere005_1.geometry} material={materials.pupille} />
            <mesh name="Sphere005_2" geometry={nodes.Sphere005_2.geometry} material={materials.oeilnoir} />
          </group>
          <mesh name="bocal" geometry={nodes.bocal.geometry} material={materials.oeiltransp} position={[5.901, 3.358, -1.855]} rotation={[Math.PI, 0, Math.PI]} >
            <MeshTransmissionMaterial
              transmission={1}
              metalness={0}
              roughness={0}
              ior={2.33}
            />
          </mesh>
          <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials['Material.003']} position={[-3.292, 3.017, -1.034]} />
          <mesh name="Sphere002" geometry={nodes.Sphere002.geometry} material={materials['Material.003']} position={[-3.166, 2.932, -1.449]} />
          <mesh name="Sphere003" geometry={nodes.Sphere003.geometry} material={materials['Material.003']} position={[-2.8, 2.592, -1.054]} />

          <mesh name="chaudLiq" geometry={nodes.chaudLiq.geometry} material={materials.liquidechaudron} position={[-0.282, 1.458, 5.946]} />
          <mesh name="touillette" ref={touilletteRef} geometry={nodes.touillette.geometry} material={materials['Material.002']} position={[-0.243, 0.866, 5.949]} />
        </group>
        <pointLight
          position={[-3.292, 3.017, -1.034]}
          intensity={12}
          color="red"
          castShadow
            receiveShadow
        />
        <pointLight
          position={[-3.166, 2.932, -1.449]}
          intensity={12}
          color="red"
          castShadow
            receiveShadow
        />
        <pointLight
          position={[-2.8, 2.592, -1.054]}
          intensity={12}
          color="red"
          castShadow
            receiveShadow
        />
      </group>
    </group>
  )
}


useGLTF.preload('/models/halloweenCompressed.glb')
