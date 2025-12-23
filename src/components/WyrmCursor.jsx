import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const WyrmCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    // Create a trail of segments for the Wyrm body
    const segments = [...Array(15)].map((_, i) => i);

    return (
        <>
            {segments.map((index) => (
                <motion.div
                    key={index}
                    style={{
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        width: `${20 - index}px`,
                        height: `${20 - index}px`,
                        borderRadius: '50%',
                        backgroundColor: index === 0 ? 'var(--accent-primary)' : 'rgba(100, 255, 218, 0.4)',
                        border: index === 0 ? '2px solid #fff' : 'none',
                        zIndex: 9999 - index,
                        pointerEvents: 'none',
                        x: useSpring(cursorX, { damping: 25 + index * 2, stiffness: 200 - index * 5 }),
                        y: useSpring(cursorY, { damping: 25 + index * 2, stiffness: 200 - index * 5 }),
                    }}
                />
            ))}
        </>
    );
};

export default WyrmCursor;
