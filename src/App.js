import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Navbar from "./components/NavBar/Navbar";
import RecentProjects from "./components/Projects/RecentProjects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectsPage from "./components/Projects/ProjectsPage";
import ProjectsNavbar from "./components/NavBar/ProjectNavbar";

function App() {
  const location = useLocation();

  // Decide which navbar to show
  const isProjectsPage = location.pathname === "/projects";
  return (
    <div className="App">
      {isProjectsPage ? <ProjectsNavbar /> : <Navbar />}
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <RecentProjects />
                <Contact />
              </>
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
