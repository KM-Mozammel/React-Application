import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ContactPage from '../src/components/contact/ContactPage';
import AboutPage from '../src/components/about/AboutPage';
import HomePage from '../src/components/home/HomePage';
import Footer from '../src/components/footer/Footer';

import ApiFetch from '../src/components/API/ApiFetch';
import Insert from './components/API/Insert';
import DeleteByID from '../src/components/API/delete';

function GetData() {
  const style = {
    textDecoration: "none",
    marginTop: "10px",
    marginBottom: "10px",
  }
  return (
    <div>
      <h5><a style={style} href='/insert'>Create new Company</a></h5>
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
        <Route path="/insert" element={<Insert />} />
        <Route path="/delete" element={<DeleteByID />} />
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