import { motion } from 'framer-motion';
import WyrmTitle from './WyrmTitle';
import { FaCode, FaLaptopCode, FaShieldAlt, FaJava, FaReact, FaNodeJs, FaAws, FaLinux, FaGitAlt, FaDocker, FaMicrosoft } from 'react-icons/fa';
import { SiJavascript, SiC, SiCplusplus, SiPython, SiNextdotjs, SiRedux, SiExpress, SiGraphql, SiTailwindcss, SiPostgresql, SiMysql, SiMongodb, SiPrisma, SiSqlite, SiRedis, SiKubernetes, SiSocketdotio } from 'react-icons/si';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const iconVariant = {
    hidden: { scale: 0, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 200 }
    },
    hover: {
        scale: 1.2,
        rotate: 5,
        transition: { type: "spring", stiffness: 300 }
    }
};

const expertise = [
    {
        title: "Expert in Web & Mobile Development",
        icon: FaCode,
        color: "#4ade80"
    },
    {
        title: "Expert in System Administration",
        icon: FaLaptopCode,
        color: "#4ade80"
    },
    {
        title: "Intermediate in CyberSecurity and Networking",
        icon: FaShieldAlt,
        color: "#4ade80"
    }
];

const techStacks = {
    languages: [
        { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
        { icon: FaJava, name: "Java", color: "#007396" },
        { icon: SiC, name: "C", color: "#A8B9CC" },
        { icon: SiCplusplus, name: "C++", color: "#00599C" },
        { icon: SiPython, name: "Python", color: "#3776AB" }
    ],
    web: [
        { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
        { icon: FaReact, name: "React", color: "#61DAFB" },
        { icon: FaNodeJs, name: "Node.js", color: "#339933" },
        { icon: SiRedux, name: "Redux", color: "#764ABC" },
        { icon: SiExpress, name: "Express", color: "#ffffff" },
        { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
        { icon: SiSocketdotio, name: "Socket.io", color: "#ffffff" },
        { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" }
    ],
    databases: [
        { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
        { icon: SiMysql, name: "MySQL", color: "#4479A1" },
        { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
        { icon: SiPrisma, name: "Prisma", color: "#2D3748" },
        { icon: SiSqlite, name: "SQLite", color: "#003B57" },
        { icon: SiRedis, name: "Redis", color: "#DC382D" }
    ],
    tools: [
        { icon: FaAws, name: "AWS", color: "#FF9900" },
        { icon: FaMicrosoft, name: "Azure", color: "#0078D4" },
        { icon: FaLinux, name: "Linux", color: "#FCC624" },
        { icon: FaGitAlt, name: "Git", color: "#F05032" },
        { icon: FaDocker, name: "Docker", color: "#2496ED" },
        { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" }
    ]
};

const Skills = () => {
    return (
        <section id="skills" className="section container" style={{ minHeight: '100vh', padding: '6rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <WyrmTitle>
                    <h2 className="section-title" style={{ color: 'var(--text-primary)', fontSize: '3.5rem', textShadow: '0 0 20px rgba(100, 255, 218, 0.1)' }}>
                        Skills
                    </h2>
                </WyrmTitle>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100px' }}
                    style={{ height: '2px', background: 'var(--accent-primary)', margin: '1rem auto', borderRadius: '2px' }}
                />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
                {/* Top Row - Expertise */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {expertise.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariant}
                            whileHover={{ y: -10, boxShadow: '0 10px 40px -10px rgba(74, 222, 128, 0.2)' }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(74, 222, 128, 0.3)',
                                borderRadius: '16px',
                                padding: '3rem 2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                width: '100px',
                                height: '100px',
                                background: 'white',
                                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '2rem',
                                color: item.color,
                                fontSize: '3rem',
                                animation: 'blob 10s infinite alternate'
                            }}>
                                <item.icon />
                            </div>
                            <h3 style={{
                                color: '#4ade80',
                                fontSize: '1.2rem',
                                fontWeight: '600',
                                lineHeight: '1.6'
                            }}>
                                {item.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                {/* Middle Row - Languages & Web */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '2rem'
                }}>
                    <SkillCard title="Programming Languages" items={techStacks.languages} />
                    <SkillCard title="Web Technologies" items={techStacks.web} />
                </div>

                {/* Bottom Row - DB & Tools */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '2rem'
                }}>
                    <SkillCard title="Databases and ORMs" items={techStacks.databases} />
                    <SkillCard title="Other Tools and Services" items={techStacks.tools} />
                </div>
            </motion.div>
        </section>
    );
};

const SkillCard = ({ title, items }) => (
    <motion.div
        variants={cardVariant}
        whileHover={{ scale: 1.01, borderColor: '#4ade80' }}
        style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(74, 222, 128, 0.2)',
            borderRadius: '16px',
            padding: '2.5rem',
            position: 'relative'
        }}
    >
        <h3 style={{
            color: '#4ade80',
            textAlign: 'center',
            marginBottom: '2rem',
            fontSize: '1.3rem',
            fontWeight: '600'
        }}>
            {title}
        </h3>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
        }}>
            {items.map((tech, idx) => (
                <motion.div
                    key={idx}
                    variants={iconVariant}
                    whileHover="hover"
                    style={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer'
                    }}
                    title={tech.name}
                >
                    <div style={{
                        fontSize: '3rem',
                        color: tech.color || '#fff',
                        filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))'
                    }}>
                        <tech.icon />
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

export default Skills;
