import { useEffect, useState } from 'react';
import { sound } from './assets';

export default function useInput() {
    const [input, setInput] = useState({
        zero: false,
        one: false,
        two: false,
        go: false,
    });

    const keys = {
        Numpad0: 'zero',
        Numpad1: 'one',
        Numpad2: 'two',
        Digit0: 'zero',
        Digit1: 'one',
        Digit2: 'two',
        NumpadEnter: 'go',
        Enter: 'go',
    };

    const audio = new Audio();

    audio.src = sound;

    function findkey(key) {
        return keys[key];
    }

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.code in keys) audio.play();
            setInput((val) => ({ ...val, [findkey(e.code)]: true }));
        }
        function handleKeyUp(e) {
            setInput((val) => ({ ...val, [findkey(e.code)]: false }));
        }
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return input;
}
