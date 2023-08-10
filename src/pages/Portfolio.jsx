import React from 'react';
import "./Portfolio.css";
import cinemaSearch from "../assets/images/cinema-search.jpg";
import bdsm from "../assets/images/burgers-space-monkeys.jpg";
import svgLogoMaker from "../assets/images/svg-logo-maker.jpg";
import readmeGenerator from "../assets/images/readme-generator.jpg";
import techBlogMVC from "../assets/images/tech-blog-mvc.jpg";
import HOMEZ from "../assets/images/homez.jpg";

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            image: cinemaSearch,
            name: 'Cinema Search',
            technologies: 'HTML, CSS, JavaScript, jQuery, Flixster API, TheMovieDB API',
            description: 'This application searches for movies currently playing and nearby theaters, and it displays nearby theaters by taking a ZIP code input from the user.',
            deployedUrl: 'https://pk50sshowa.github.io/cinema-search/',
            repoUrl: 'https://www.github.com/pk50sshowa/cinema-search',
        },
        {
            id: 2,
            image: bdsm,
            name: 'Burgers Delivered by Space Monkeys',
            technologies: 'HTML, CSS, JavaScript, Node.js, Express.js, Handlebars, MySQL, Heroku, Sequelize ORM, Express-session',
            description: 'Welcome to "Burgers Delivered by Space Monkeys" (BDSM)! This is a whimsical and interactive web application that allows users to order delicious burgers delivered by our adorable space monkey couriers.',
            deployedUrl: 'https://polar-cove-07937.herokuapp.com/',
            repoUrl: 'https://github.com/dustinii/BDSM',
        },
        {
            id: 3,
            image: HOMEZ,
            name: 'HOMEZ',
            technologies: 'HTML, CSS, JavaScript, MERN Framework (MongoDB, Express.js, React.js, Node.js)',
            description: 'HOMEZ pairs riders with two drivers: One to take them home, and one to take their car home. Think of it as a ride share service with the extra convenience of taking your car home while getting you home safely. Such services are commonplace in countries like South Korea and Japan, so we thought that we\'d bring you a similar service here in the States!',
            deployedUrl: 'https://homez-a7bb0a2adb47.herokuapp.com/',
            repoUrl: 'https://github.com/dustinii/HOMEZ',
        },
        {
            id: 4,
            image: svgLogoMaker,
            name: 'SVG Logo Maker',
            technologies: 'Node.js, Inquirer.js, Jest.js, Express.js',
            description: 'This project is a command line application that generates an SVG file based on user inputs, and also has a test package that checks to make sure the input conditions meet ideal conditions for the creation of SVG files.',
            repoUrl: 'https://github.com/pk50sshowa/SVGLogoMaker',
        },
        {
            id: 5,
            image: readmeGenerator,
            name: 'README Generator',
            technologies: 'Node.js, Inquirer.js, Jest.js, Express.js',
            description: 'This is a command-line application used to generator a README file. The application uses the Inquirer package to prompt the user for information about the project, and then it generates a README file based on the user\'s responses.',
            repoUrl: 'https://github.com/pk50sshowa/readmeGenerator',
        },
        {
            id: 6,
            image: techBlogMVC,
            name: 'Tech Blog MVC',
            technologies: 'HTML, CSS, JavaScript, Node.js, Inquirer.js, Jest.js, Express.js, Sequelize, Handlebars, Express-session, Bcrypt, Dotenv, MySQL2, Heroku',
            description: 'This is a blog using the MVC framework to host tech-related articles. Users can post articles and store their login information as well.',
            deployedUrl: 'http://tech-blog-mvc-pjk.herokuapp.com/',
            repoUrl: 'https://github.com/pk50sshowa/techBlogMVC',
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
                        <div className="project-technologies">{project.technologies}</div>
                        <div className="project-description">{project.description}</div>
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