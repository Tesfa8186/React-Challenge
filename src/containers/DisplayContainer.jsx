import React, { useState} from 'react';
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import About from '../pages/About/About'
import Portfolio from '../pages/Portfolio/Portfolio'
import Resume from '../pages/Resume/Resume'
import Contact from '../pages/Contact/Contact'

 function DisplayContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
    </div>
    )
}

export default DisplayContainer;