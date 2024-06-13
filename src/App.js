import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ContactPage from '../src/components/contact/ContactPage';
import AboutPage from '../src/components/about/AboutPage';
import HomePage from '../src/components/home/HomePage';
import Footer from '../src/components/footer/Footer';
import ApiFetch from '../src/components/API/ApiFetch';

function GetData() {
  return (
    <div>
      <h2>Getting data from API:</h2>
      <ApiFetch />
    </div>
    
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/data" element={<GetData />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


// import React from "react";
// import State from '../src/components/stateManagement';

// export default function app(){
//   return(
//     <State/>
//   );
// }