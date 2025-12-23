import { motion } from 'framer-motion';
import WyrmTitle from './WyrmTitle';

const Experience = () => {
    return (
        <section id="experience" className="section container" style={{ minHeight: '100vh', padding: '6rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <WyrmTitle>
                    <h2 className="section-title" style={{ color: 'var(--text-primary)', fontSize: '3.5rem', textShadow: '0 0 20px rgba(100, 255, 218, 0.1)' }}>
                        Experience
                    </h2>
                </WyrmTitle>
                <div style={{ height: '2px', width: '100px', background: 'var(--accent-primary)', margin: '1rem auto' }}></div>
            </div>

            <div className="timeline" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                {/* Timeline Line */}
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    style={{
                        position: 'absolute',
                        width: '2px',
                        background: 'rgba(100, 255, 218, 0.2)',
                        top: 0,
                        bottom: 0,
                        left: '20px',
                        marginLeft: '-1px'
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ padding: '10px 0 10px 50px', position: 'relative', width: '100%', marginBottom: '3rem' }}
                >
                    {/* Dot */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            width: '12px',
                            height: '12px',
                            background: 'var(--bg-color)',
                            border: '2px solid var(--accent-primary)',
                            borderRadius: '50%',
                            position: 'absolute',
                            left: '20px',
                            top: '24px',
                            transform: 'translateX(-50%)',
                            zIndex: 1,
                            boxShadow: '0 0 10px var(--accent-primary)'
                        }}
                    />

                    <motion.div
                        whileHover={{ y: -5 }}
                        style={{
                            background: 'var(--glass-bg)',
                            padding: '2rem',
                            borderRadius: '16px',
                            border: '1px solid var(--glass-border)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem', alignItems: 'baseline' }}>
                            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: '600' }}>MERN Stack Internship</h3>
                            <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-primary)', fontSize: '0.9rem', border: '1px solid var(--accent-primary)', padding: '2px 10px', borderRadius: '12px' }}>
                                Aug '25 - Present
                            </span>
                        </div>
                        <h4 style={{ color: 'var(--accent-primary)', fontWeight: '500', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            @ NodDesk
                        </h4>

                        <ul style={{ color: 'var(--text-secondary)', listStyle: 'none', padding: 0 }}>
                            {[
                                "Gained hands-on experience in full-stack development through rigorous training in the MERN stack.",
                                "Co-developed multiple project works, collaborating effectively as a team member.",
                                "Implemented core RESTful APIs using Node.js/Express.js for foundational application projects.",
                                "Built component-based architecture in React.js to accelerate front-end expertise."
                            ].map((item, i) => (
                                <li key={i} style={{ marginBottom: '1rem', position: 'relative', paddingLeft: '20px' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>▹</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                            {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map((tech, i) => (
                                <span key={i} style={{ fontSize: '0.85rem', color: 'var(--text-primary)', opacity: 0.8 }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
