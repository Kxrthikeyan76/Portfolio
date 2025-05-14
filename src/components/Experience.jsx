import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from './Footer';
import { experiences } from '../constants';

// Skill icons
import Python from "../assets/Skills/python.png";
import Java from "../assets/Skills/java.png";
import JavaScript from "../assets/Skills/java-script.png";
import HTML from "../assets/Skills/html-5.png";
import CSS from "../assets/Skills/css.png";
import Express from "../assets/Skills/express.png";
import Node from "../assets/Skills/node-js.png";
import ReactJS from "../assets/Skills/structure.png";
import Git from "../assets/Skills/git.png";
import GitHub from "../assets/Skills/github.png";
import Excel from "../assets/Skills/logo.png";
import PowerBI from "../assets/Skills/icons8-power-bi-logo-48.png";
import jQuery from "../assets/Skills/social.png";
import Bootstrap from "../assets/Skills/bootstrap.png";
import PostgreSQL from "../assets/Skills/postgre.png";
import Postman from "../assets/Skills/postman-icon.png";


const skills = [
  { name: "Python", icon: Python },
  { name: "Java", icon: Java },
  { name: "JavaScript", icon: JavaScript },
  { name: "HTML", icon: HTML },
  { name: "CSS", icon: CSS },
  { name: "Express.js", icon: Express },
  { name: "Node.js", icon: Node },
  { name: "React.js", icon: ReactJS },
  { name: "Git", icon: Git },
  { name: "GitHub", icon: GitHub },
  { name: "Excel", icon: Excel },
  { name: "Power BI", icon: PowerBI },
  { name: "jQuery", icon: jQuery },
  { name: "Bootstrap", icon: Bootstrap },
  { name: "PostgreSQL", icon: PostgreSQL },
  { name: "Postman", icon: Postman }
];

const Experience = () => {
  return (
    <div id='experience' className='bg-black text-white w-screen overflow-x-hidden pt-20'>
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Skills and Experience</h2>
        <p className="text-gray-400">A quick glance at what I bring to the table.</p>
      </div>

      {/* Skills Section */}
      <div className="mb-24 px-4 sm:px-16">
        <h3 className="text-2xl font-semibold mb-8 text-center">My Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-xl p-6 shadow-md flex flex-col items-center justify-center w-32 h-36 hover:bg-gray-800 transition duration-300"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-14 h-14 mb-5 object-contain"
              />
              <p className="text-sm text-white text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className='sm:px-16'>
        <p className='font-light'>MY JOURNEY SO FAR.</p>
        <h3 className='text-2xl sm:text-3xl font-bold mt-2 mb-10'>Work Experience</h3>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={experience.duration}
              iconStyle={{ background: '#fff' }}
              icon={
                <a className='flex justify-center items-center w-full h-full' href={experience.url} target='_blank' rel="noopener noreferrer">
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </a>
              }
            >
              <div>
                <h4 className='text-white text-[24px] font-bold'>{experience.role}</h4>
                <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
                  {experience.company}
                </p>
              </div>

              <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, idx) => (
                  <li key={`experience-point-${idx}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <Footer />
    </div>
  );
};

export default Experience;
