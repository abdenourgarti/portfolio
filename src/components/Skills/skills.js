import React from 'react';
import { useLang } from '../../i18n';
import Reveal from '../Reveal';
import './Skills.css';

const devicon = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

const skillGroups = [
  {
    key: 'frontend',
    skills: [
      { name: 'React', logo: devicon('react') },
      { name: 'Next.js', logo: devicon('nextjs') },
      { name: 'Vue.js', logo: devicon('vuejs') },
      { name: 'JavaScript', logo: devicon('javascript') },
      { name: 'HTML', logo: devicon('html5') },
      { name: 'CSS', logo: devicon('css3') },
      { name: 'TailwindCSS', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
      { name: 'Bootstrap', logo: devicon('bootstrap') },
    ],
  },
  {
    key: 'backend',
    skills: [
      { name: 'Node.js', logo: devicon('nodejs') },
      { name: 'Express.js', logo: devicon('express') },
      { name: 'PHP', logo: devicon('php') },
      { name: 'Laravel', logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg' },
    ],
  },
  {
    key: 'data',
    skills: [
      { name: 'MongoDB', logo: devicon('mongodb') },
      { name: 'MySQL', logo: devicon('mysql') },
      { name: 'Oracle', logo: devicon('oracle') },
    ],
  },
  {
    key: 'tools',
    skills: [
      { name: 'Java', logo: devicon('java') },
      { name: 'C', logo: devicon('c') },
      { name: 'Git', logo: devicon('git') },
      { name: 'GitHub', logo: devicon('github') },
      { name: 'WordPress', logo: devicon('wordpress', 'plain') },
    ],
  },
];

const Skills = () => {
  const { ui } = useLang();

  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal className="section-head">
          <h2>{ui.skills.title}</h2>
          <p>{ui.skills.lead}</p>
        </Reveal>

        <div className="skill-groups">
          {skillGroups.map((group, i) => (
            <Reveal key={group.key} className={`skill-group skill-group--${group.key}`} delay={i * 80}>
              <h3>{ui.skills.cats[group.key]}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <img src={skill.logo} alt="" width="28" height="28" loading="lazy" />
                    <span dir="ltr">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
