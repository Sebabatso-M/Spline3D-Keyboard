import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useProgress, Loader } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useControls, Leva } from 'leva';
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
            },
        },
        autoRotateSpeed: {
            value: 2.0,
            min: 2.0,
            max: 10,
            disabled: false,
        },
    });

    return (
        <>
            <Suspense fallback={<Loading></Loading>}>
                <Leva collapsed={true} />
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
                        minZoom={0.1}
                        maxZoom={0.6}
                    />

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
            <Loader></Loader>
        </>
    );
}

function Loading() {
    const { progress } = useProgress();

    const styles = {
        display: 'grid',
        placeItems: 'center',
        fontSize: '2rem',
        width: '100%',
        height: '100%',
    };
    return (
        <>
            <div style={styles}>
                <h1>{progress}%</h1>
            </div>
        </>
    );
}
