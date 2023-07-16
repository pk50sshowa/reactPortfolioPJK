import Home from './Home';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

const Page = ({ currentPage }) => {
    switch (currentPage) {
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

export default Page;