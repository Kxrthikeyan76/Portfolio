import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}
      >
        <img src={service.icon} alt='some_icon' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{service.title}</h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              👨‍💻 Hi, I'm <span className="text-blue-400 font-bold">Karthikeyan S</span>, a passionate AI and Data Science student 🎓 currently pursuing my Bachelor's degree at St. Joseph’s Institute of Technology (2022 - 2026).  
              <br /><br />
              🚀 I specialize in Full Stack Development, Machine Learning and AI-powered applications.  
              <br /><br />

              ✍️ I love learning and building scalable and optimized systems. I'm also interested in web development and data-driven applications.  
              <br /><br />
              💡 I'm a highly motivated and hard-working individual with a strong passion for learning and improving. I'm also a natural leader who can guide a team effectively toward a common goal, ensuring collaboration and timely success.
              <br /><br />
              🏀 Sports & Achievements:  
              - Represented Aditya Vidyashram Residential School in the State-Level Basketball Tournament (2022) 🏆🏀  
              - Passionate about teamwork, discipline, and sportsmanship.  
              <br /><br />
              📜 Certified Courses & Achievements:
  <ul className="list-disc list-inside mt-2">
    <li>✅ Full Stack Web Development (Udemy)</li>
    <li>✅ Design and Analysis of Algorithms (NPTEL)</li>
    <li>✅ Python for Data Science (NPTEL)</li>
    <li>✅ Data Mining (NPTEL)</li>
    <li>✅ JavaScript Essentials (LinkedIn Learning)</li>
    <li>✅ Writing Effective Emails (LinkedIn Learning)</li>
    <li>🏅 50 Days Consecutive Coding Badge (LeetCode)</li>
  </ul>
            </p>

            <ButtonLink
              url='https://drive.google.com/file/d/1q_5IN0X017X58_JoUzTHltXhVdA3pJuE/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />
          </div>

          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
