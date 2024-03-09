import { IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { BiLogoGmail, BiUpArrowCircle } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
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
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 180) {
      setVisible(true);
    } else if (scrolled < 180) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className="relative"
      style={{
        fontFamily: "Poppins",
      }}
    >
      <button
        className="fixed top-10  hover:scale-125 duration-200 left-12 z-10 rounded-lg bg-gray-200"
        aria-label="Open Navbar"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <HiMenuAlt2 color={"#06223f"} className="text-[35px] font-bold" />
      </button>

      {/* Hiden section */}
      {false && (
        <div className="fixed bottom-0 flex flex-col items-center gap-2 left-5 z-10 rounded-lg">
          <IconButton aria-label="linkedin">
            <FaLinkedinIn className="size-7" />
          </IconButton>
          <IconButton aria-label="github">
            <FiGithub className="size-7" />
          </IconButton>
          <IconButton
            aria-label="gmail"
            style={{
              borderRadius: "50%",
            }}
          >
            <BiLogoGmail className="size-7" />
          </IconButton>
          <div className="w-[1px] h-32 bg-black"></div>
        </div>
      )}

      {/* Scroll to top */}
      {visible && (
        <button
          className="fixed bottom-10  right-12 z-10 rounded-lg hover:scale-125 duration-200 bg-gray-200"
          aria-label="Scroll-top"
          onClick={scrollToTop}
        >
          <BiUpArrowCircle
            color={"#06223f"}
            className="text-[35px] font-bold"
          />
        </button>
      )}
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
