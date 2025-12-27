import React from 'react';
import { motion } from 'framer-motion';
import aboutPhoto from '../assets/hero_new.png';

const education = [
    {
        school: "Lovely Professional University",
        details: "Bachelor of Technology - Computer Science and Engineering; CGPA: 7.80",
        date: "Aug' 23 - Present",
        location: "Phagwara, Punjab"
    },
    {
        school: "Bhavan’s Vidyashram",
        details: "Intermediate; Percentage: 78.4%",
        date: "Apr' 20 – Mar' 22",
        location: "Ramanattukara, Kerala"
    },
    {
        school: "Amrita Vidyalayam",
        details: "Matriculation; Percentage: 94.2%",
        date: "Apr' 19 – Mar' 20",
        location: "Tanur, Kerala"
    }
];

const About = () => {
    return (
        <section id="about" className="about-container">
            <div className="container">
                <div className="about-grid">
                    {/* Left: Bio & Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="about-bio"
                    >
                        <h3>ABOUT ME</h3>
                        <div className="about-text">
                            <p style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                                Hello, I'm Adithya V Nair
                            </p>
                            <p>
                                I’m a driven DevOps Enthusiast and Full-Stack Developer with a focus on cloud infrastructure. I'm passionate about bridging the gap between development and operations to build scalable, secure, and efficient web applications. My skill set spans from building dynamic user interfaces with the MERN Stack to orchestrating containerized deployments using Docker and Kubernetes.
                            </p>
                            <br />
                            <p>
                                As an Oracle Cloud Infrastructure Certified DevOps Professional, I am committed to mastering cloud-native technologies and delivering seamless digital experiences.
                            </p>
                        </div>

                  ps Engineer      <h4 className="education-title">Education</h4>
                        <div className="education-timeline">
                            {education.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="education-item"
                                >
                                    <div className="edu-school">{item.school}</div>
                                    <div className="edu-details">{item.details}</div>
                                    <div className="edu-date">{item.date} | {item.location}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="about-image-wrapper"
                    >
                        <img src={aboutPhoto} alt="Adithya V Nair" className="about-image" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
