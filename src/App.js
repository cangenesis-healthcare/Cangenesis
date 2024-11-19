import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import ApolloHospital from './pages/Apollo';
import FortisHospital from './pages/Fortis';
import Cost from './pages/Cost';
import CART from './pages/CART';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsappButton';

import './App.css';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/doctors' element={<Doctors />}></Route>
        <Route path='./apollo' element={<ApolloHospital />}></Route>
        <Route path='./fortis' element={<FortisHospital />}></Route>
        <Route path='/cost' element={<Cost />}></Route>
        <Route path='/cart' element={<CART />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
