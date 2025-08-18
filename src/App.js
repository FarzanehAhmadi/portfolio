import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Navbar from "./components/NavBar/Navbar";
import RecentProjects from "./components/Projects/RecentProjects";
import Contact from "./components/Contact/Contact";
// import ProjectsPage from "./components/Projects/ProjectsPage"; // create this

function App() {
  return (
    <div className="App">
      <Navbar />
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
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
