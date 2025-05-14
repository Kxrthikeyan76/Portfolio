import React from "react";
import simon from '../assets/simon.png';
import drum from '../assets/drum.png';
import medi from '../assets/Medi.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="flex flex-col bg-gray-900 border border-neutral-700 rounded-lg shadow-lg w-full max-w-[350px] 
                        transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <a href={git} target="_blank" rel="noopener noreferrer">
                <img className="w-full h-56 object-cover rounded-t-lg" src={image} alt={title} />
            </a>
            <div className="p-4">
                <a href={git} target="_blank" rel="noopener noreferrer">
                    <h5 className="text-lg font-bold tracking-tight text-white">{title}</h5>
                </a>
                <p className="text-gray-300 text-sm">{description}</p>
            </div>
            <div className="flex justify-between items-center px-4 pb-4">
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tag, index) => (
                        <span key={index} className="text-sm text-blue-500">#{tag}</span>
                    ))}
                </div>
                <a href={git} target="_blank" rel="noopener noreferrer" 
                   className="text-red-300 border border-gray-200 rounded-lg shadow px-3 py-1 hover:text-green-500 duration-300">
                    GitHub
                </a>
            </div>
        </div>
    );
};

// Project data (moved above to prevent errors)
export const project = [
    {
        title: 'Simon Game',
        description: 'Simon model built using basic HTML, CSS, and JavaScript.',
        image: simon,
        git: 'https://github.com/Kxrthikeyan76/Simon-Game',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Drum-Kit',
        description: 'A mini drum-kit model designed using HTML, CSS, and JavaScript.',
        image: drum,
        git: 'https://github.com/Kxrthikeyan76/Drum-kit',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Medical Chatbot',
        description: 'AI-powered Chatbot which predicts diseases based on user-provided symptoms and recommends nearby hospitals.',
        image: medi,
        git: "https://github.com/Kxrthikeyan76/Medical-Chatbot",
        technologies: ['Python', 'Flask', 'Torch']
    }
];

const Projects = () => {
    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Container to center projects */}
            <div className="flex flex-grow flex-wrap justify-center items-center gap-8 px-6">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>

            {/* Footer stays at the bottom */}
            <Footer />
        </div>
    );
};

export default Projects;
