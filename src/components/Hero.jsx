import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" className="hero-container">
            {/* Background Bars */}
            <div className="hero-background">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hero-bar"
                    style={{ top: '-20%', right: '10%' }}
                />
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="hero-bar"
                    style={{ top: '10%', right: '25%', width: '120px' }}
                />
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="hero-bar"
                    style={{ top: '40%', right: '40%', width: '80px' }}
                />
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="hero-bar"
                    style={{ top: '0%', right: '55%', width: '150px' }}
                />
            </div>

            <div className="hero-content">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-tagline"
                >
                    Hello, I'm
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="hero-name"
                >
                    Adithya V Nair
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hero-bio"
                >
                    I'm a passionate <span>Full Stack Developer</span> from India.
                </motion.p>

                <nav className="hero-nav">
                    <a href="#hero" className="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div className="hero-socials">
                    <motion.a
                        href="https://linkedin.com/in/adithya-v-nair"
                        target="_blank"
                        whileHover={{ y: -5 }}
                        className="social-icon"
                    >
                        <FaLinkedinIn />
                    </motion.a>
                    <motion.a
                        href="https://github.com/AdithyaVNair"
                        target="_blank"
                        whileHover={{ y: -5 }}
                        className="social-icon"
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ y: -5 }}
                        className="social-icon"
                    >
                        <FaTwitter />
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ y: -5 }}
                        className="social-icon"
                    >
                        <FaInstagram />
                    </motion.a>
                </div>

                <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="resume-btn"
                >
                    View Resume
                </motion.a>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="scroll-indicator"
            >
                <div className="mouse"></div>
                <div className="arrows">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
