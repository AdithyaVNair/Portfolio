import * as fa from 'react-icons/fa';
import * as si from 'react-icons/si';

const faIcons = ['FaCode', 'FaLaptopCode', 'FaShieldAlt', 'FaJava', 'FaReact', 'FaNodeJs', 'FaAws', 'FaLinux', 'FaGitAlt', 'FaDocker'];
const siIcons = ['SiTypescript', 'SiJavascript', 'SiKotlin', 'SiRust', 'SiC', 'SiCplusplus', 'SiPython', 'SiNextdotjs', 'SiRedux', 'SiExpress', 'SiGraphql', 'SiTailwindcss', 'SiPostgresql', 'SiMysql', 'SiMongodb', 'SiPrisma', 'SiSqlite', 'SiRedis', 'SiMicrosoftazure', 'SiKubernetes', 'SiSocketdotio'];

console.log('--- FA Icons ---');
faIcons.forEach(icon => {
    if (!fa[icon]) console.error(`MISSING: ${icon}`);
    else console.log(`OK: ${icon}`);
});

console.log('--- SI Icons ---');
siIcons.forEach(icon => {
    if (!si[icon]) console.error(`MISSING: ${icon}`);
    else console.log(`OK: ${icon}`);
});
