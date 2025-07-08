import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'This is a brief description of Project One.',
            image: 'path/to/image1.jpg',
            demoLink: 'https://live-demo-link1.com',
            repoLink: 'https://github.com/user/project-one'
        },
        {
            title: 'Project Two',
            description: 'This is a brief description of Project Two.',
            image: 'path/to/image2.jpg',
            demoLink: 'https://live-demo-link2.com',
            repoLink: 'https://github.com/user/project-two'
        },
        {
            title: 'Project Three',
            description: 'This is a brief description of Project Three.',
            image: 'path/to/image3.jpg',
            demoLink: 'https://live-demo-link3.com',
            repoLink: 'https://github.com/user/project-three'
        }
    ];

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projectList.map((project, index) => (
                    <div className="project" key={index}>
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;