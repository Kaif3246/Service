import React from 'react'
import './App.css'
import { Outlet } from "react-router-dom";
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import TopBar from './components/common/TopBar';
import HeroSection from './components/homepage/HeroSection';
import CoreFeatures from './components/homepage/CoreFeatures';
import AboutCompany from './components/homepage/AboutCompany';
import Services from './components/homepage/Services';
import FunFacts from './components/homepage/FunFacts';
import Testimonials from './components/homepage/Testimonials';
import ContactForm from './components/homepage/ContactForn';
import Footer from './components/homepage/Footer';
import FullScreen from './components/homepage/FullScreen';
import CustomCursor from './components/homepage/CustomeCursor';

function App() {
 

  return (
   <>
    <div>
      <CustomCursor />
    </div>

  <Navbar/>
  <Outlet/>
 
  <Footer/>

   </>
  )
}

export default App
