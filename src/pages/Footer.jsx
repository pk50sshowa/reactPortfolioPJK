import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div classname="copyright">
            <p>© 2023 - Paul Koehler</p>
            </div>
            <div classname="social-links">
            <a href="https://github.com/pk50sshowa" target="_blank" rel="noopener noreferrer">GitHub</a><br></br>
            <a href="https://www.linkedin.com/in/paul-koehler-29046228/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    )
}

export default Footer;