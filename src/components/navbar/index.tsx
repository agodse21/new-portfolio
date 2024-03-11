import { Fade } from "@chakra-ui/react";
import { useState } from "react";
import { CgMicrosoft } from "react-icons/cg";
import { GrUserWorker } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { MdPermContactCalendar, MdRecommend } from "react-icons/md";
import { RiProjectorLine } from "react-icons/ri";
import { TbHome2 } from "react-icons/tb";

export default function Navbar({ isOpen }: { isOpen: boolean }) {
  const [current, setCurrent] = useState("home");

  return (
    <Fade in={isOpen} className="fixed z-10 top-[85%] left-[40%]">
      <div className="bg-[#e2e8f099] px-2 py-4 rounded-full w-96 shadow-lg flex justify-around items-center backdrop-blur-md backdrop-filter">
        <a
          href="#home"
          onClick={() => setCurrent("home")}
          style={{
            borderRadius: "50%",
            backgroundColor: current === "home" ? "#06223f" : "transparent",
          }}
          className="size-10 flex justify-center items-center"
        >
          <TbHome2
            className="text-2xl hover:scale-125 duration-200"
            style={{
              color: current === "home" ? "#ffffff" : "#06223f",
            }}
          />
        </a>
        <a
          href="#about"
          onClick={() => setCurrent("about")}
          style={{
            borderRadius: "50%",
            backgroundColor: current === "about" ? "#06223f" : "transparent",
          }}
          className="size-10 flex justify-center items-center"
        >
          <IoIosContact
            className="text-2xl hover:scale-125 duration-200"
            style={{
              color: current === "about" ? "#ffffff" : "#06223f",
            }}
          />
        </a>

        <a
          href="#experience"
          onClick={() => setCurrent("experience")}
          style={{
            borderRadius: "50%",
            backgroundColor:
              current === "experience" ? "#06223f" : "transparent",
          }}
          className="size-10 flex justify-center items-center"
        >
          <GrUserWorker
            className="text-xl hover:scale-125 duration-200"
            style={{
              color: current === "experience" ? "#ffffff" : "#06223f",
            }}
          />
        </a>

        <a
          href="#projects"
          onClick={() => setCurrent("projects")}
          style={{
            borderRadius: "50%",
            backgroundColor: current === "projects" ? "#06223f" : "transparent",
          }}
          className="size-10 flex justify-center items-center"
        >
          <RiProjectorLine
            className="text-2xl hover:scale-125 duration-200"
            style={{
              color: current === "projects" ? "#ffffff" : "#06223f",
            }}
          />
        </a>
        <a
          href="#testimonials"
          onClick={() => setCurrent("testimonials")}
          style={{
            borderRadius: "50%",
            backgroundColor:
              current === "testimonials" ? "#06223f" : "transparent",
          }}
          className="size-10 flex justify-center items-center"
        >
          <MdRecommend
            className="text-2xl hover:scale-125 duration-200"
            style={{
              color: current === "testimonials" ? "#ffffff" : "#06223f",
            }}
          />
        </a>

        <a
          href="#skills"
          onClick={() => setCurrent("skills")}
          style={{
            borderRadius: "50%",
            backgroundColor: current === "skills" ? "#06223f" : "transparent",
          }}
          className="size-10 flex justify-center items-center"
        >
          <CgMicrosoft
            className="text-2xl hover:scale-125 duration-200"
            style={{
              color: current === "skills" ? "#ffffff" : "#06223f",
            }}
          />
        </a>
        <a
          href="#contact"
          onClick={() => setCurrent("contact")}
          style={{
            borderRadius: "50%",
            backgroundColor: current === "contact" ? "#06223f" : "transparent",
          }}
          className="size-10 flex justify-center items-center"
        >
          <MdPermContactCalendar
            style={{
              color: current === "contact" ? "#ffffff" : "#06223f",
            }}
            className="text-2xl hover:scale-125 duration-200"
          />
        </a>
      </div>
    </Fade>
  );
}
