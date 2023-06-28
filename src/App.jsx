import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useControls } from 'leva';
import Scene from './Scene';

import { useState } from 'react';

export default function App() {
    // const [debugMode, setDebugMode] = useState(false)

    const { debug } = useControls({
        debug: false,
    });

    return (
        <Suspense fallback={null}>
            <Canvas shadows flat linear>
                <Scene />
                <OrbitControls enablePan={false} />

                {debug && (
                    <>
                        <Perf
                            position={'top-left'}
                            style={{
                                marginTop: '10px',
                                marginLeft: '15px',
                            }}
                        />
                        <axesHelper args={[5000]} />
                        <gridHelper scale={400} />
                    </>
                )}
            </Canvas>
        </Suspense>
    );
}
