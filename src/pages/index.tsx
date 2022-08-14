import { useEffect } from 'react';
import Aos from 'aos';
import NavBar from '../components/NavBar/navbar';
// import About from  '../components/About/about';

// // import Sidebar from '../components/Sidebar';
// //  import Tecnology from '../components/Tecnology/Tecnology';
// //  import Projects from '../components/Projects/projects';
// //  import Conhecimento from '../components/Conhecimento';

 import 'aos/dist/aos.css';


export default function Home() {
  useEffect(() => {
    Aos.init({ duration:1500 });
  }, []);

  return (
<>
     
      <NavBar /> 
      <main className="container">
       {/* <About/> */}
    
  
      </main>
  </>
  );
}
