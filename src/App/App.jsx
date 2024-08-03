import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import FAQ from '../FAQ/FAQ';
import Label from '../Label/Label';
import Feedback from '../Feedback/Feedback';
import City from '../City/City';
import Lamp from '../Lamp/Lamp';
import Productcard from '../Product/Productcard';
import Slider from '../Slider/Slider';
import Cat1 from '../Cat1/Cat1';
import Cat2 from '../Cat2/Cat2';
import Cat3 from '../Cat3/Cat3';
import Cat5 from '../Cat5/Cat5';
import Cat4 from '../Cat4/Cat4';

function App() {


  return (
    <div>

      <NavBar />
      <Routes>
        
        <Route path="/Lamp" element={
          <>
            <Lamp />
            <City />
            <Label />
            <Feedback />
            <FAQ />
          </>
        } />
        
        
        <Route path="/product/:productId" element={
          <>
            <Productcard />
            <City />
            <Label />
            <Feedback />
            <FAQ />
          </>
        } />

        
        <Route path="/" element={
          <>
            <Slider />
            <Cat1 />
            <Cat2 />
            <Cat3 />
            <Cat5 />
            <Cat4 />
            <City />
            <Label />
            <Feedback />
            <FAQ />
          </>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

