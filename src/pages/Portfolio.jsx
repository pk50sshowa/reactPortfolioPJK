import React from 'react';
import "./Portfolio.css";
import cinemaSearch from "../assets/cinema-search.jpg";
import bdsm from "../assets/burgers-space-monkeys.jpg";
import svgLogoMaker from "../assets/svg-logo-maker.jpg";
import readmeGenerator from "../assets/readme-generator.jpg";
import techBlogMVC from "../assets/tech-blog-mvc.jpg";
import weatherChecker from "../assets/weather-checker.jpg";

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            image: cinemaSearch,
            name: 'Cinema Search',
            deployedUrl: 'https://pk50sshowa.github.io/cinema-search/',
            repoUrl: 'https://www.github.com/pk50sshowa/cinema-search',
        },
        {
            id: 2,
            image: bdsm,
            name: 'Burgers Delivered by Space Monkeys',
            deployedUrl: 'https://polar-cove-07937.herokuapp.com/',
            repoUrl: 'https://github.com/dustinii/BDSM',
        },
        {
            id: 3,
            image: svgLogoMaker,
            name: 'SVG Logo Maker',
            repoUrl: 'https://github.com/pk50sshowa/SVGLogoMaker',
        },
        {
            id: 4,
            image: readmeGenerator,
            name: 'README Generator',
            repoUrl: 'https://github.com/pk50sshowa/readmeGenerator',
        },
        {
            id: 5,
            image: techBlogMVC,
            name: 'Tech Blog MVC',
            deployedUrl: 'http://tech-blog-mvc-pjk.herokuapp.com/',
            repoUrl: 'https://github.com/pk50sshowa/techBlogMVC',
        },
        {
            id: 6,
            image: weatherChecker,
            name: 'Weather Checker',
            deployedUrl: 'https://pk50sshowa.github.io/weatherChecker/index.html',
            repoUrl: 'https://github.com/pk50sshowa/weatherChecker',
        },
    ];

    return (
        <section id="portfolio">
            <h1>Projects</h1>
            <div className="projects">
                {projects.map((project) => (
                    <div key={project.id} className="project">
                        <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.name} width="20%" />
                        </a>
                        <div className="project-title">{project.name}</div>
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