import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';

const Page = ({ currentPage }) => {
    switch (currentPage.name) {
        case 'Home':
            return <Home />;
        case 'About':
            return <About />;
        case 'Projects':
            return <Projects />;
        default:
            return <Home />;
    }
};

export default Page;