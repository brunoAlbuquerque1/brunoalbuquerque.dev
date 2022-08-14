import { useEffect } from 'react';
import Head from 'next/head';
import Aos from 'aos';
import 'aos/dist/aos.css';
import NavBar from '@/components/NavBar/navbar';
import Footer from '@/components/Footer/footer';
import About from '@/components/About/about';
import Tecnology from '@/components/Tecnology/tecnology';
import Projects from '@/components/Projects/projects';
import Experiences from '@/components/Experiences/experiences';


export default function Home() {
  useEffect(() => {
    Aos.init({ duration:1500 });
  }, []);

  return (
<>
      <NavBar /> 
      <main className="container">

        <About/>
        <Tecnology />
        <Projects />
        <Experiences />

      </main>
      <Footer /> 

  </>
  );
}
