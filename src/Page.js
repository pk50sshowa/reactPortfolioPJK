import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';


function Page ({ currentPage }) {

const renderPage = ({ currentPage }) => {
    switch (currentPage.name) {
        case 'Home':
            return <Home />;
        case 'About':
            return <About />;
        case 'Projects':
            return <Projects />;
        case 'Footer':
            return <Footer />;
        default:
            return <Home />;
    }
};

return (
    <section>
        <h2>(currentPage.name)</h2>
    </section>
)

export default Page;