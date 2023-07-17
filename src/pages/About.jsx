import React from "react";
import "./About.css";

const About = () => {
    return (
        <section id="about">
        <div>
            <h2>About Paul</h2>
        </div>
        <div className="about-image"> 
            <img src="/assets/PJK.jpg" alt="Paul Koehler" />
        </div>
        <div className="about-text">
            <h1>Home</h1>
            <p>Welcome to Paul Koehler's portfolio page! Please take a look at the various projects on this page, and feel free to contact Paul directly at <a href="mailto:paul.koehler@gmail.com">paul.koehler@gmail.com</a>.</p>
            <p>
            I am seeking employment as a software developer using experience as a Japanese-English translator and intepreter. My portfolio on this page shows past projects I have worked on, and you can also follow my <a href="http://www.github.com/pk50sshowa/" target="_blank" rel="noopener noreferrer">GitHub account</a>.
            </p>
            <p>
            初めまして。ポールと申します。日英翻訳・通訳者の経験を生かして、ソフトウェア開発の仕事を探しております。よろしくお願いします。
            </p>
        </div>
        </section>
    );
}

export default About;