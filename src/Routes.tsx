import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout/defaultLayout";
import {Home} from "./pages/Home/home";
import {About} from "./pages/About/About";
import {Projects} from "./pages/Projects/projects";
import {Trajectory} from "./pages/Trajectory/trajectory";
import {Tecnologi} from "./pages/Tecnologi/tecnologi";
import {Contact} from "./pages/Contact/contact";

function AppRoutes() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/trajectory" element={<Trajectory />} />
          <Route path="/tecnologi" element={<Tecnologi />} />
          <Route path="/trajectory" element={<Trajectory />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default AppRoutes;