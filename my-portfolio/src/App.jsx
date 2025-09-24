import React from "react";
import AboutCard from "./Components/AboutCard";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app-wrapper">
   
      <div className="main-container">
        <aside className="left-column">
          <AboutCard />
        </aside>
        <main className="right-column">
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
