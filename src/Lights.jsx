import React from 'react';

export const Lights = ({ useAmbient }) => {
    return (
        <>
            <directionalLight
                name='Directional Light'
                castShadow
                intensity={0.7}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={-10000}
                shadow-camera-far={100000}
                shadow-camera-left={-1000}
                shadow-camera-right={1000}
                shadow-camera-top={1000}
                shadow-camera-bottom={-1000}
                position={[-507.3, 258.25, 63.99]}
                rotation={[0, 1.21, 0]}
                scale={[0.58, 1, 1]}
            />
            {useAmbient ? (
                <ambientLight intensity={0.75} />
            ) : (
                <hemisphereLight
                    name='Default Ambient Light'
                    intensity={0.8}
                    color='#e9e8e8'
                />
            )}
        </>
    );
};
