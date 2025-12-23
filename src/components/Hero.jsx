import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, Text, ScrollControls, useScroll, Html } from '@react-three/drei';
import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import heroImg from '../assets/hero_full.png'; // Updated to full screen image
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

function HeroContent() {
    const scroll = useScroll();
    const texture = useTexture(heroImg);
    const group = useRef();
    const imageRef = useRef();
    const { width, height } = useThree((state) => state.viewport);

    // Calculate 'cover' scale maintaining aspect ratio
    const imageAspect = texture.image.width / texture.image.height;
    const viewportAspect = width / height;

    let scaleWidth, scaleHeight;
    if (imageAspect > viewportAspect) {
        // Image is wider than viewport: Match height, let width overflow
        scaleHeight = height;
        scaleWidth = height * imageAspect;
    } else {
        // Image is taller/narrower than viewport: Match width, let height overflow
        scaleWidth = width;
        scaleHeight = width / imageAspect;
    }

    // Add a slight overscale to allow for parallax movement without showing edges
    const parallaxFactor = 1.1;
    scaleWidth *= parallaxFactor;
    scaleHeight *= parallaxFactor;

    useFrame((state, delta) => {
        // Parallax effect on scroll
        // Move opposite to scroll direction
        // scroll.offset goes 0 -> 1
        if (imageRef.current) {
            // Simple parallax: move the image slightly
            imageRef.current.position.y = -scroll.offset * 2;
        }
    });

    return (
        <group ref={group}>
            {/* Hero Image Plane - Full Screen Cover */}
            <mesh ref={imageRef} position={[0, 0, 0]}>
                <planeGeometry args={[scaleWidth, scaleHeight]} />
                <meshBasicMaterial
                    map={texture}
                    transparent
                    toneMapped={false}
                />
            </mesh>
        </group>
    );
}

function Particle({ index, width, height, scroll }) {
    // Hidden per request for cleaner look? Or keep?
    // User said "fill the hero page with this pic". 
    // Usually implies clean look. I'll hide particles for now or reduce them.
    // Keeping for "amazing" feel but maybe subtle?
    // Let's keep them but make sure they don't obstruct.
    const ref = useRef();
    const [initialPos] = useState(() => [
        (Math.random() - 0.5) * width * 1.5,
        (Math.random() - 0.5) * height * 1.5,
        (Math.random() - 0.5) * 2
    ]);

    useFrame((state) => {
        if (ref.current) {
            const t = state.clock.elapsedTime;
            ref.current.position.y = initialPos[1] + Math.sin(t + index) * 0.2 + scroll.offset * 5;
            ref.current.rotation.x = t * 0.2;
            ref.current.rotation.y = t * 0.3;
        }
    });

    return (
        <mesh ref={ref} position={initialPos}>
            <octahedronGeometry args={[0.05 + Math.random() * 0.1]} />
            <meshStandardMaterial color={index % 2 === 0 ? "#646cff" : "#ffffff"} transparent opacity={0.3} />
        </mesh>
    );
}


const Hero = () => {
    return (
        <section id="hero" style={{
            height: '100vh', // Full screen
            width: '100%',
            position: 'relative',
            background: '#ffffff', // White
            marginTop: '0' // Remove nav buffer to allow overlap
        }}>
            {/* HTML Overlay for buttons/info that shouldn't be 3D or needs SEO/Accessibiltiy easily */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none', // Let clicks pass through to canvas if needed, but here we want buttons to be clickable
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                paddingBottom: '0',
                justifyContent: 'flex-start'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    style={{
                        pointerEvents: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        textAlign: 'center',
                        width: '100%',
                        paddingTop: '35vh' // Restore standard padding for full screen
                    }}
                >
                    <h1 style={{
                        fontSize: 'clamp(3rem, 10vw, 8rem)',
                        fontWeight: '800',
                        lineHeight: 0.9,
                        letterSpacing: '-0.05em',
                        // Subtler gradient: Deep charcoal to medium grey, avoiding white bloom
                        background: 'linear-gradient(to right, #1a1a1a, #555555, #1a1a1a)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        // Slower, smoother animation
                        animation: 'text-shimmer 8s linear infinite',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-heading)',
                        width: '100%',
                        textAlign: 'center'
                    }}>
                        Adithya V Nair
                    </h1>

                    <p style={{ color: '#555', fontSize: '1.2rem', margin: 0, fontWeight: '500' }}>Full Stack Developer | AI Enthusiast</p>

                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                        <a href="#contact" style={{
                            padding: '1rem 2rem',
                            background: '#000',
                            color: '#fff',
                            borderRadius: '50px',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            textDecoration: 'none'
                        }}>
                            Get in Touch <FaArrowRight />
                        </a>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <motion.a
                                href="https://www.linkedin.com/in/adithya-v-nair/"
                                target="_blank"
                                whileHover={{ scale: 1.2, color: '#64ffda', rotate: 10 }}
                                whileTap={{ scale: 0.9 }}
                                style={{ color: '#0a192f', fontSize: '2.2rem', display: 'flex', alignItems: 'center' }}
                            >
                                <FaLinkedinIn />
                            </motion.a>
                            <motion.a
                                href="https://github.com/AdithyaVNair"
                                target="_blank"
                                whileHover={{ scale: 1.2, color: '#64ffda', rotate: -10 }}
                                whileTap={{ scale: 0.9 }}
                                style={{ color: '#0a192f', fontSize: '2.2rem', display: 'flex', alignItems: 'center' }}
                            >
                                <FaGithub />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <React.Suspense fallback={null}>
                    <ScrollControls pages={0} damping={0.2}>
                        <HeroContent />
                    </ScrollControls>
                </React.Suspense>
            </Canvas>
        </section>
    );
};

export default Hero;
