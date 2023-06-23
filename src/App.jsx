import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import Scene from './Scene';

export default function App() {
    return (
        <Suspense fallback={null}>
            <Canvas shadows flat linear>
                <Scene />
                <OrbitControls enablePan={false} />
                <Perf
                    position={'top-left'}
                    style={{
                        marginTop: '10px',
                        marginLeft: '15px',
                    }}
                />
                <axesHelper args={[5000]} />
                <gridHelper scale={400} />
            </Canvas>
        </Suspense>
    );
}
