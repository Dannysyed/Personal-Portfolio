'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import ProjectCard from '@components/ProjectCard'; // Import your ProjectCard component
import Image from 'next/image';

const Category = ({ categoryName, categoryImage, projects }) => {
    const [showProjects, setShowProjects] = useState(false);

    const toggleProjects = () => {
        setShowProjects(!showProjects);
    };

    return (
        <div className="mb-8">
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: showProjects ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
                onClick={toggleProjects}
            >
                <Image
                    src={categoryImage}
                    alt={categoryName}
                    className="w-14 h-14 rounded-full cursor-pointer"
                />
            </motion.div>
            {showProjects && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4"
                >
                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            projectLink={project.projectLink}
                            technologies={project.technologies}
                        />
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Category;
