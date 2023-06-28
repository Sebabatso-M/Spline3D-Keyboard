import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useControls } from 'leva';
import Scene from './Scene';

import { useState } from 'react';

export default function App() {
    const [enableRotControl, setEnableRotControl] = useState(false);

    const { debug, autoRotateSpeed } = useControls({
        debug: false,
        autoRotate: {
            value: enableRotControl,
            onChange: (value) => {
                setEnableRotControl(value);
                console.log(enableRotControl);
            },
        },
        autoRotateSpeed: {
            value: 2.0,
            min: 2.0,
            max: 10,
            disabled: enableRotControl,
        },
    });

    return (
        <Suspense fallback={null}>
            <Canvas shadows flat linear>
                <Scene />
                {/* <Leva collapsed={true} /> */}
                <OrbitControls
                    // left and right
                    /* minAzimuthAngle={-Math.PI / 6}
                    maxAzimuthAngle={Math.PI / 6} */
                    // up and down
                    minPolarAngle={Math.PI / 4} // up limit
                    maxPolarAngle={Math.PI - Math.PI / 2.5} // down limit
                    autoRotate={enableRotControl}
                    autoRotateSpeed={autoRotateSpeed}
                />
                {/* <OrbitControls enablePan={false} /> */}

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
