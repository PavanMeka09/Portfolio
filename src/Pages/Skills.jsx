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

const skills = {
  "Languages": [
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "C / C++", icon: <span className="flex items-center gap-1"><SiC /> <SiCplusplus /></span> },
    { name: "Java", icon: <DiJava /> },
    { name: "Go", icon: <SiGo /> },
  ],
  "Frontend": [
    { name: "ReactJS", icon: <SiReact /> },
    { name: "NextJS", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Redux", icon: <SiRedux /> },
  ],
  "Backend": [
    { name: "NodeJS", icon: <SiNodedotjs /> },
    { name: "ExpressJS", icon: <SiExpress /> },
  ],
  "Databases": [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ],
  "ORM": [
    { name: "Prisma", icon: <SiPrisma /> },
  ],
  "Version Control & Tools": [
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
  ]
};

const SkillCategory = ({ title, skills }) => (
  <div className="mb-12">
    <h3 className="text-xl lg:text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-5">{title}</h3>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <span key={index} className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-md font-medium px-5 py-2 rounded-lg shadow-sm flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);

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