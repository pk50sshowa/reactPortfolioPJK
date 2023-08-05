import React from "react";
import "./About.css";
import paulImage from "../assets/images/PJK.jpg"

const About = () => {
    return (
        <section id="about">
        <div>
            <h2>About Paul</h2>
        </div>
        <div className="about-image"> 
            <img src={paulImage} alt="Paul Koehler"/>
        </div>
        <div className="about-text">
            <h1>Home</h1>
            <p>Welcome to Paul Koehler's portfolio page! Please take a look at the various projects on this page, and feel free to contact Paul directly at <a href="mailto:paul.koehler@gmail.com">paul.koehler@gmail.com</a>.</p>
            <p>
            Paul Koehler is a full stack developer with a passion for learning new technologies and in particular making sure server interfaces communicate with an entire application. He comes into this with an extensive background as a Japanese to English translator and interpreter. My portfolio on this page shows past projects I have worked on, and you can also follow my <a href="http://www.github.com/pk50sshowa/" target="_blank" rel="noopener noreferrer">GitHub account</a>.
            </p>
            <p>
            初めまして。ポールと申します。日英翻訳・通訳者の経験を生かして、ソフトウェア開発の仕事を探しております。よろしくお願いします。
            </p>
        </div>
        </section>
    );
}

export default About;