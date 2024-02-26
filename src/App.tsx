import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Testimonials from "./components/testimonials";
import WorkExprience from "./components/work-exprience";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      style={{
        fontFamily: "Poppins",
      }}
    >
      <button
        className="fixed top-10  left-12 z-10 rounded-lg bg-gray-200"
        aria-label="Open Navbar"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <HiMenuAlt2 color={"#06223f"} className="text-[35px] font-bold" />
      </button>

      <Navbar isOpen={isOpen} />

      <Home />
      <About />
      <WorkExprience />
      <Projects />
      <Testimonials />
      <Skills />
      <Contact />

      <div
        id="skills"
        className="p-5 flex justify-center gap-2 items-center flex-col w-full"
      >
        <span
          className="text-xl font-semibold text-primary"
          style={{
            fontFamily: "Paprika",
          }}
        >
          Amol Godse
        </span>
        <span className="font-medium">
          Designed and Developed by Amol Godse,©Copyright 2024. All rights
          reserved
        </span>
      </div>
    </div>
  );
}

export default App;
