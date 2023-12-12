import React from 'react';
import Category from '@components/Category'; // Import your Category component
import reactImage from '../../../public/assets/structure.png'
import jsImage from '../../../public/assets/js.png'
import pythonImage from '../../../public/assets/python.png'
import Image from 'next/image';
// Sample project data categorized by language/framework
const categorizedProjects = {
    React: [
        {
            id: 1,
            title: 'React Project 1',
            description: 'Description of React Project 1...',
            imageUrl: '/path/to/react_project1_image.jpg',
            projectLink: 'https://reactproject1link.com',
            technologies: ['React', 'Redux', 'JavaScript'],

        },
        {
            id: 2,
            title: 'React Project 2',
            description: 'Description of React Project 2...',
            imageUrl: '/path/to/react_project2_image.jpg',
            projectLink: 'https://reactproject2link.com',
            technologies: ['React', 'CSS', 'HTML'],

        },
        // Add more React projects as needed
    ],
    Python: [
        {
            id: 3,
            title: 'Python Project 1',
            description: 'Description of Python Project 1...',
            imageUrl: '/path/to/python_project1_image.jpg',
            projectLink: 'https://pythonproject1link.com',
            technologies: ['Python', 'Django', 'PostgreSQL'],

        },
        {
            id: 4,
            title: 'Python Project 2',
            description: 'Description of Python Project 2...',
            imageUrl: '/path/to/python_project2_image.jpg',
            projectLink: 'https://pythonproject2link.com',
            technologies: ['Python', 'Flask', 'SQLite'],

        },
        // Add more Python projects as needed
    ],
    // Add more categories as needed
};
const categoryImages = {
    React: reactImage,
    Python: pythonImage,
    // Add more categories with respective image paths
};

const ProjectsPage = () => {
    return (
        <main className="container mx-auto my-8 px-4">
            <h1 className="text-4xl font-bold mb-8">My Projects</h1>
            {Object.keys(categorizedProjects).map(category => (
                <Category
                    key={category}
                    categoryName={category}
                    categoryImage={categoryImages[category]}
                    projects={categorizedProjects[category]}
                />
            ))}
        </main>
    );
};

export default ProjectsPage;
