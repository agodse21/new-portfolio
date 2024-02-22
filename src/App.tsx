import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import './App.css';
import Home from "./components/home";
import Navbar from "./components/navbar";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative" style={{
      fontFamily: "Poppins",

    }}>
      <button className="absolute top-10 left-12 z-10" aria-label='Open Navbar' style={{
        backgroundColor: "transparent"
      }} onClick={() => { setIsOpen(!isOpen) }}  >
        <HiMenuAlt2 color={"#06223f"} className="text-[40px] font-bold" />
      </button>

      <Navbar isOpen={isOpen} />

      <Home />

    </div>
  )
}

export default App
