import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
    const [phase, setPhase] = useState('loading'); // loading, name, complete

    useEffect(() => {
        // Sequence timing: summoning only
        const completeTimer = setTimeout(() => {
            if (onLoadingComplete) onLoadingComplete();
        }, 3000); // Trigger completion after 3s (summoning phase)

        return () => {
            clearTimeout(completeTimer);
        };
    }, [onLoadingComplete]);

    const wyrmPath = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
                opacity: { duration: 0.5 }
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: '#0a0a0a',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000,
                overflow: 'hidden'
            }}
        >
            <AnimatePresence mode='wait'>
                {phase === 'loading' && (
                    <motion.div
                        key="wyrm-loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        style={{ width: '300px', height: '300px', position: 'relative' }}
                    >
                        {/* Abstract Wyrm Loading SVG */}
                        <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
                            <motion.path
                                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                                fill="none"
                                stroke="var(--accent-primary)"
                                strokeWidth="4"
                                variants={wyrmPath}
                                initial="hidden"
                                animate="visible"
                                style={{ filter: 'drop-shadow(0 0 10px var(--accent-primary))' }}
                            />
                            <motion.path
                                d="M 100 100 L 100 100"
                                fill="none"
                                stroke="var(--accent-secondary)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                animate={{
                                    d: [
                                        "M 100 100 L 100 100",
                                        "M 50 150 L 150 50",
                                        "M 50 50 L 150 150",
                                        "M 100 100 L 100 100"
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "circInOut" }}
                            />
                        </svg>
                        <p style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-secondary)', letterSpacing: '4px' }}>SUMMONING...</p>
                    </motion.div>
                )}


            </AnimatePresence>
        </motion.div>
    );
};

export default Loader;
