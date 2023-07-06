/*
  Auto-generated by Spline
*/

import { useRef, useEffect, useState } from 'react';

import useSpline from '@splinetool/r3f-spline';
import { useControls } from 'leva';
import { useFrame } from '@react-three/fiber';

import useInput from './hooks.js';
import { Lights } from './Lights.jsx';
import Camera from './Camera.jsx';

export default function Scene({ ...props }) {
    const { nodes, materials } = useSpline(
        'https://prod.spline.design/TMf0OmzEGwiC-IQm/scene.splinecode'
    );
    /*   console.log(nodes);
    console.log(materials);
    console.log({ ...nodes.Cube.material });
    console.log(Object.keys(nodes));
     */ // console.log(structuredClone(nodes.Cube.material));

    let increment = 0.005;
    let limit = 0.8;
    const [isIncreasing, setIsIncreasing] = useState(true);

    function rotateObj() {
        let rot = keyboardRef.current.rotation;
        if (isIncreasing) {
            rot.y += increment;
            if (rot.y >= limit) {
                rot.y = limit;
                setIsIncreasing(false);
            }
        } else {
            rot.y -= increment;
            if (rot.y <= -limit) {
                rot.y = -limit;
                setIsIncreasing(true);
            }
        }
    }

    useFrame((_, delta) => {
        // keyboardRef.current.rotation.x += 1 * delta;

        if (rotate) rotateObj();
    });

    const goRef = useRef();
    const key0Ref = useRef();
    const key01Ref = useRef();
    const key02Ref = useRef();
    const keyGroup0Ref = useRef();
    const keyGroup01Ref = useRef();
    const keyGroup02Ref = useRef();
    const keyGroupGoRef = useRef();
    const lPlatRef = useRef();
    const hPlatRef = useRef();
    const keyRefs = [goRef, key0Ref, key01Ref, key02Ref, lPlatRef, hPlatRef];

    const keyboardRef = useRef();

    const { zero, one, two, go } = useInput();

    function handleKeyPressed(key, ref) {
        if (key) {
            ref.current.position.y = -40;
        } else {
            ref.current.position.y = 15;
        }
    }

    function simulateKeyPress(event, key, code) {
        const keyEvent = new KeyboardEvent(event, { key, code });
        document.dispatchEvent(keyEvent);
    }

    useEffect(() => {
        handleKeyPressed(zero, keyGroup0Ref);
        handleKeyPressed(one, keyGroup01Ref);
        handleKeyPressed(two, keyGroup02Ref);
        handleKeyPressed(go, keyGroupGoRef);
    }, [zero, one, two, go]);

    const { useAmbient, rotate } = useControls({
        useAmbient: false,
        wireframe: {
            value: false,
            onChange: (value) => {
                keyRefs.forEach((ref) => {
                    ref.current.material.wireframe = value;
                });
            },
        },
        rotate: false,
    });

    return (
        <>
            <color attach='background' args={['#e7e5e4']} />
            <group {...props} dispose={null} ref={keyboardRef}>
                <group name='platforms' position={[0, -127.52, 0]}>
                    <mesh
                        name='lower platform'
                        geometry={nodes['lower platform'].geometry}
                        material={materials['lower platform Material']}
                        castShadow
                        ref={lPlatRef}
                        receiveShadow
                        position={[0, -38.12, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        name='upper platform'
                        geometry={nodes['upper platform'].geometry}
                        material={materials['upper platform Material']}
                        castShadow
                        receiveShadow
                        ref={hPlatRef}
                        position={[0, -1.34, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                </group>
                <group name='keys' position={[0, 105.58, 0]}>
                    <group
                        name='key Go'
                        ref={keyGroupGoRef}
                        position={[235.65, 0, 229.12]}
                        onPointerDown={() =>
                            simulateKeyPress('keydown', 'Enter', 'NumpadEnter')
                        }
                        onPointerUp={() =>
                            simulateKeyPress('keyup', 'Enter', 'NumpadEnter')
                        }
                    >
                        <mesh
                            name='Text'
                            geometry={nodes.Text.geometry}
                            material={materials['Text Material']}
                            castShadow
                            receiveShadow
                            position={[-36.17, 145.16, -64.39]}
                            rotation={[-Math.PI / 2, 0, 0]}
                        />
                        <mesh
                            name='Cube'
                            geometry={nodes.Cube.geometry}
                            // material={materials['key orange']}
                            material={nodes.Cube.material}
                            ref={goRef}
                            // material={btnRef.current.material}
                            castShadow
                            receiveShadow
                            position={[0, 76.42, 0]}
                            scale={[1.02, 1, 1]}
                        />
                    </group>
                    <group
                        name='key 2'
                        ref={keyGroup02Ref}
                        position={[235.65, 0, -229.12]}
                        onPointerDown={() =>
                            simulateKeyPress('keydown', '2', 'Digit2')
                        }
                        onPointerUp={() =>
                            simulateKeyPress('keyup', '2', 'Digit2')
                        }
                    >
                        <mesh
                            name='Text1'
                            geometry={nodes.Text1.geometry}
                            material={materials['Text1 Material']}
                            castShadow
                            receiveShadow
                            position={[-53.64, 145.16, -64.39]}
                            rotation={[-Math.PI / 2, 0, 0]}
                        />
                        <mesh
                            name='Cube1'
                            geometry={nodes.Cube1.geometry}
                            material={materials.key}
                            castShadow
                            ref={key02Ref}
                            receiveShadow
                            position={[0, 76.42, 0]}
                            scale={[1.02, 1, 1]}
                        />
                    </group>
                    <group
                        name='key 0'
                        ref={keyGroup0Ref}
                        position={[-235.65, 0, 229.12]}
                        onPointerDown={() =>
                            simulateKeyPress('keydown', '0', 'Digit0')
                        }
                        onPointerUp={() =>
                            simulateKeyPress('keyup', '0', 'Digit0')
                        }
                    >
                        <mesh
                            name='Text2'
                            geometry={nodes.Text2.geometry}
                            material={materials['Text2 Material']}
                            castShadow
                            receiveShadow
                            position={[-53.64, 145.16, -64.39]}
                            rotation={[-Math.PI / 2, 0, 0]}
                        />
                        <mesh
                            name='Cube2'
                            geometry={nodes.Cube2.geometry}
                            material={materials.key}
                            castShadow
                            ref={key0Ref}
                            receiveShadow
                            position={[0, 76.42, 0]}
                            scale={[1.02, 1, 1]}
                        />
                    </group>
                    <group
                        name='key 1'
                        ref={keyGroup01Ref}
                        position={[-235.65, 0, -229.12]}
                        onPointerDown={() =>
                            simulateKeyPress('keydown', '1', 'Digit1')
                        }
                        onPointerUp={() =>
                            simulateKeyPress('keyup', '1', 'Digit1')
                        }
                    >
                        <mesh
                            name='Text3'
                            geometry={nodes.Text3.geometry}
                            material={materials['Text3 Material']}
                            castShadow
                            receiveShadow
                            position={[-53.64, 145.16, -64.39]}
                            rotation={[-Math.PI / 2, 0, 0]}
                        />
                        <mesh
                            name='Cube3'
                            geometry={nodes.Cube3.geometry}
                            material={materials.key}
                            ref={key01Ref}
                            castShadow
                            receiveShadow
                            position={[0, 76.42, 0]}
                            scale={[1.02, 1, 1]}
                        />
                    </group>
                </group>
            </group>

            <Camera />
            <Lights useAmbient={useAmbient} />
            {/* <ambientLight intensity={0.75} /> */}
        </>
    );
}
