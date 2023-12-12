import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

const ProjectCard = ({ title, description, imageUrl, projectLink, technologies }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg overflow-hidden shadow-md"
        >
            <div className="relative h-60 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="object-cover object-center w-full h-full"
                />
                <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300"
                >
                    <span className="text-white text-lg font-bold">
                        View Project
                    </span>
                </a>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-sm mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-200 rounded-md px-2 py-1 text-xs">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
