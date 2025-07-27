
'use client';

import Header from './components/header';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Projects/>
    <Certificates/>
    <Contact/>
    <Footer/>
    </>
  );
}
