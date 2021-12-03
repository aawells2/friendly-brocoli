import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Footer from './components/Navbar/Footer';

import NavbarComp from './components/Navbar/NavbarComp';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import ErrorPage from './components/Pages/ErrorPage';
import Work from './components/Pages/Work';



function App() {
  return (
    <div className="App">
      
      
      <Router>
      <NavbarComp/>
        <Routes>
          <Route path="/" element={ <Work /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="*" element={ <ErrorPage /> } />
        </Routes>
      <Footer/>
      </Router>
      
      
      
    </div>
  );
}

export default App;
