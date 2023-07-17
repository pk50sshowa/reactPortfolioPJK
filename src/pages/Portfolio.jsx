import React from 'react';
import "./Portfolio.css";

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            image: '',
            name: 'Cinema Search',
            deployedUrl: 'https://pk50sshowa.github.io/cinema-search/',
            repoUrl: 'https://www.github.com/pk50sshowa/cinema-search',
        },
        {
            id: 2,
            image: '',
            name: 'Burgers Delivered by Space Monkeys',
            deployedUrl: 'https://polar-cove-07937.herokuapp.com/',
            repoUrl: 'https://github.com/dustinii/BDSM',
        },
        {
            id: 3,
            image: '',
            name: 'SVG Logo Maker',
            repoUrl: 'https://github.com/pk50sshowa/SVGLogoMaker',
        },
        {
            id: 4,
            image: '',
            name: 'README Generator',
            repoUrl: 'https://github.com/pk50sshowa/readmeGenerator',
        },
    ];

    return (
        <section id="portfolio">
            <h3>Projects</h3>
            <div className="projects">
                {projects.map((project) => (
                    <div key={project.id} className="project">
                        <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.name} />
                        </a>
                        <div className="project-name">{project.name}</div>
                        <div className="project-links">
                            <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Demo</a><br></br>
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;