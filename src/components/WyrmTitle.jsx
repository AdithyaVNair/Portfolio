import { motion } from 'framer-motion';

const WyrmTitle = ({ children }) => {
    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                style={{ position: 'relative', padding: '10px 20px', zIndex: 2 }}
            >
                {children}
            </motion.div>

            {/* Coiling Wyrm SVG */}
            <motion.svg
                viewBox="0 0 300 100"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '120%',
                    height: '150%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                    pointerEvents: 'none',
                    overflow: 'visible'
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.path
                    d="M 10,50 Q 80,0 150,50 T 290,50"
                    fill="none"
                    stroke="var(--accent-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: {
                            pathLength: 1,
                            opacity: 0.5,
                            transition: { duration: 1.5, ease: "easeInOut" }
                        }
                    }}
                />
                {/* Animated Orbits */}
                <motion.ellipse
                    cx="150"
                    cy="50"
                    rx="120"
                    ry="30"
                    fill="none"
                    stroke="var(--accent-secondary)"
                    strokeWidth="1"
                    strokeDasharray="10 10"
                    variants={{
                        hidden: { pathLength: 0, rotateX: 0 },
                        visible: {
                            pathLength: 1,
                            rotateX: 10,
                            transition: { duration: 2, ease: "easeOut" }
                        }
                    }}
                />
                <motion.ellipse
                    cx="150"
                    cy="50"
                    rx="120"
                    ry="30"
                    fill="none"
                    stroke="var(--accent-primary)"
                    strokeWidth="1"
                    strokeDasharray="5 5"
                    initial={{ rotate: -10, opacity: 0 }}
                    whileInView={{ opacity: 0.3, rotate: 10 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                />
            </motion.svg>
        </div>
    );
};

export default WyrmTitle;
