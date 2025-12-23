import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ScrollWyrm = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform scroll progress to percentage for the path
    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div style={{
            position: 'fixed',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            height: '60vh',
            width: '4px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '2px',
            zIndex: 90,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {/* The Wyrm Body (Progress Bar) */}
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary))',
                    originY: 0,
                    scaleY,
                    borderRadius: '2px',
                    boxShadow: '0 0 10px var(--accent-primary)'
                }}
            />

            {/* The Wyrm Head (Indicator) */}
            <motion.div
                style={{
                    position: 'absolute',
                    // We move the top position based on the percentage of the container height
                    // But since scaleY changes the height of the bar, we need to position the head at the bottom of the scaled bar
                    // Actually simplest is to position it relative to the container height * scroll progress
                    top: useTransform(scrollYProgress, value => `${value * 100}%`),
                    width: '20px',
                    height: '20px',
                    left: '-8px', // Center it (4px width bar, 20px width head -> -8px offset)
                }}
            >
                <svg viewBox="0 0 24 24" width="100%" height="100%" style={{ transform: 'rotate(90deg)' }}>
                    <path d="M12 2C12 2 12 12 12 12C12 12 2 12 2 12" stroke="var(--accent-primary)" strokeWidth="2" fill="none" />
                    <circle cx="12" cy="12" r="4" fill="var(--bg-color)" stroke="var(--accent-primary)" strokeWidth="2" />
                    <circle cx="12" cy="12" r="2" fill="var(--accent-primary)" />
                </svg>
            </motion.div>
        </div>
    );
};

export default ScrollWyrm;
