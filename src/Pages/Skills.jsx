import React, { useState } from 'react';
import { 
  SiTypescript, SiJavascript, SiPython, SiC, SiCplusplus, SiGo,
  SiReact, SiNextdotjs, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress, 
  SiMysql, SiPostgresql, SiMongodb, SiFirebase,
  SiPrisma, 
  SiGit, SiGithub, 
  SiDocker, SiKubernetes
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { DiJava } from 'react-icons/di';
import { motion } from 'framer-motion';

// Add this style block to handle group hover color for each skill icon
const skillHoverStyles = `
  .group:hover .group\/icon {
    color: var(--icon-hover-color, inherit) !important;
  }
`;

const skills = {
  "Languages": [
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "C / C++"},
    { name: "Java", icon: <DiJava />, color: "#007396" },
    { name: "Go", icon: <SiGo />, color: "#00ADD8" },
  ],
  "Frontend": [
    { name: "ReactJS", icon: <SiReact />, color: "#61DAFB" },
    { name: "NextJS", icon: <SiNextdotjs />, color: "#000000" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  ],
  "Backend": [
    { name: "NodeJS", icon: <SiNodedotjs />, color: "#339933" },
    { name: "ExpressJS", icon: <SiExpress />, color: "#000000" },
  ],
  "Databases": [
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  ],
  "ORM": [
    { name: "Prisma", icon: <SiPrisma />, color: "#2D3748" },
  ],
  "Version Control & Tools": [
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "GitHub", icon: <SiGithub />, color: "#181717" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
  ]
};

const SkillCategory = ({ title, skills }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 60 }}
    >
      <h3 className="text-xl lg:text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-5">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="group bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-md font-medium px-5 py-2 rounded-lg shadow-sm flex items-center gap-2 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07, duration: 0.4, type: 'spring', stiffness: 60 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {skill.icon ? (
              <span
                className="text-xl transition-colors duration-300"
                style={{ color: hoveredIndex === index ? skill.color : '#6B7280' }}
              >
                {React.cloneElement(skill.icon, {
                  style: {
                    color: 'inherit',
                    transition: 'color 0.3s',
                  },
                })}
              </span>
            ) : null}
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <div className='min-h-screen w-full py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40' id='skills'>
      <div className="max-w-4xl mx-auto">
        <h1 className='text-3xl lg:text-4xl font-bold text-center mb-16 text-zinc-900 dark:text-white'>
          Technical Skills
        </h1>
        {Object.entries(skills).map(([category, skillList]) => (
          <SkillCategory key={category} title={category} skills={skillList} />
        ))}
      </div>
    </div>
  );
}; 