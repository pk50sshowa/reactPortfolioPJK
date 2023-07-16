import { useState } from 'react';
import Navbar from './components/Navbar';
import Page from './components/Page';
import Footer from './pages/Footer';

function App() {
  const allPages = ['Home', 'About', 'Projects'];
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div>
        <Navbar
          setCurrentPage={setCurrentPage}
          allPages={allPages} />
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>

  );
};

export default App;

