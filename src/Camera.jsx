import { OrthographicCamera } from '@react-three/drei';
import React from 'react';

const Camera = () => {
    return (
        <OrthographicCamera
            name='1'
            makeDefault={true}
            zoom={0.3}
            far={5000}
            near={-5000}
            position={[47.87, 883.95, 556.27]}
            rotation={[-1.57, 0, 0]}
        />
    );
};

export default Camera;
