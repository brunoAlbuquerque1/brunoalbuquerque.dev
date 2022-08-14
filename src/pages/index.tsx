import { useEffect } from 'react';
import Head from 'next/head';
import Aos from 'aos';
import 'aos/dist/aos.css';
import NavBar from '@/components/NavBar/navbar';
import About from '@/components/About/about';
import Tecnology from '@/components/Tecnology/tecnology';

// import Sidebar from '../components/Sidebar';
//  import Projects from '../components/Projects/projects';
//  import Conhecimento from '../components/Conhecimento';

import { HomeContainer } from '../styles/HomeStyles';
 import 'aos/dist/aos.css';


export default function Home() {
  useEffect(() => {
    Aos.init({ duration:1500 });
  }, []);

  return (
<>
     
      <NavBar /> 
      <main className="container">
       <About/>
       {/* <Tecnology /> */}
    
  
      </main>
  </>
  );
}
