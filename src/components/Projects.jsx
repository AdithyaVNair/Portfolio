import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';
import WyrmTitle from './WyrmTitle';

const projects = [
    {
        title: "Cloud Guardian",
        desc: "AI-powered fraud detection system for online examinations. Scalable fraud detection system, machine learning models for anomaly detection, and real-time behavioral/visual stream analysis.",
        tech: ["AWS", "Python", "ML", "Cloud"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "Latency Lens",
        desc: "Interactive, web-based CPU scheduling simulator. Visualizes FCFS, SJF, and Round-Robin algorithms with a responsive interface to demonstrate OS principles.",
        tech: ["HTML", "CSS", "JavaScript"],
        links: { github: "#", demo: "#" }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section container" style={{ minHeight: '100vh', padding: '6rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <WyrmTitle>
                    <h2 className="section-title" style={{ color: 'var(--text-primary)', fontSize: '3.5rem', textShadow: '0 0 20px rgba(100, 255, 218, 0.1)' }}>
                        Featured Projects
                    </h2>
                </WyrmTitle>
                <div style={{ height: '2px', width: '100px', background: 'var(--accent-primary)', margin: '1rem auto' }}></div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem'
            }}>
                {projects.map((project, index) => (
                    <Tilt
                        key={index}
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                        scale={1.02}
                        transitionSpeed={2000}
                        className="project-card-tilt"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            style={{
                                background: 'var(--glass-bg)',
                                borderRadius: '12px',
                                padding: '2rem',
                                border: '1px solid var(--glass-border)',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)'
                            }}
                            whileHover={{ y: -7 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <FaFolderOpen style={{ fontSize: '2.5rem', color: 'var(--accent-primary)' }} />
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', transition: 'color 0.3s' }} className="hover-accent"><FaGithub /></a>
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', transition: 'color 0.3s' }} className="hover-accent"><FaExternalLinkAlt /></a>
                                </div>
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: '600' }}>{project.title}</h3>

                            <div style={{
                                background: '#112240',
                                padding: '1.5rem',
                                borderRadius: '6px',
                                marginBottom: '1.5rem',
                                flexGrow: 1,
                                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)'
                            }}>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                    {project.desc}
                                </p>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontFamily: 'var(--font-heading)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                {project.tech.map((t, i) => (
                                    <span key={i} style={{ color: 'var(--text-secondary)' }}>{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    </Tilt>
                ))}
            </div>

            <style>{`
                .hover-accent:hover { color: var(--accent-primary) !important; }
            `}</style>
        </section>
    );
};

export default Projects;
