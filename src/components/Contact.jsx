import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaCommentAlt, FaPaperPlane } from 'react-icons/fa';
import WyrmTitle from './WyrmTitle';

const Contact = () => {
    return (
        <section id="contact" className="section container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '6rem 0' }}>

            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <WyrmTitle>
                    <h2 className="section-title" style={{ color: 'var(--text-primary)', fontSize: '3rem', marginBottom: '1rem', textShadow: '0 0 20px rgba(100, 255, 218, 0.1)' }}>
                        Get in Touch
                    </h2>
                </WyrmTitle>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>

                </p>
                <div style={{ height: '2px', width: '80px', background: 'var(--accent-primary)', margin: '1rem auto', borderRadius: '2px' }}></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    margin: '0 auto',
                    background: 'rgba(17, 34, 64, 0.4)',
                    backdropFilter: 'blur(10px)',
                    padding: '2.5rem',
                    borderRadius: '20px',
                    border: '1px solid var(--glass-border)',
                    boxShadow: '0 10px 40px -10px rgba(2, 12, 27, 0.7)'
                }}
            >


                <form className="contact-form" onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Name Field */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: '600', fontSize: '0.95rem' }}>
                            <FaUser /> Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your full name"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'transparent',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '12px',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                transition: 'all 0.3s ease',
                                fontSize: '1rem'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                        />
                    </div>

                    {/* Email Field */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: '600', fontSize: '0.95rem' }}>
                            <FaEnvelope /> Email
                        </label>
                        <input
                            type="email"
                            placeholder="your.email@example.com"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'transparent',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '12px',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                transition: 'all 0.3s ease',
                                fontSize: '1rem'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                        />
                    </div>

                    {/* Message Field */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: '600', fontSize: '0.95rem' }}>
                            <FaCommentAlt /> Message
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Open to new opportunities and collaborations. Let's build something great together."
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'transparent',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '12px',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                transition: 'all 0.3s ease',
                                fontSize: '1rem',
                                resize: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(100, 255, 218, 0.4)' }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            marginTop: '1rem',
                            padding: '1rem',
                            background: 'var(--accent-primary)',
                            color: 'var(--bg-color)',
                            border: 'none',
                            borderRadius: '12px',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.8rem'
                        }}
                    >
                        <FaPaperPlane /> Let's Connect
                    </motion.button>

                </form>
            </motion.div>

            <footer style={{ marginTop: 'auto', paddingTop: '50px', paddingBottom: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontFamily: 'var(--font-heading)' }}>
                <p style={{ transition: 'color 0.3s' }} className="footer-text">Designed & Built by Adithya V Nair</p>
            </footer>
        </section>
    );
};

export default Contact;
