import {
  Button,
  HStack,
  IconButton,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom";
import AsosImg from "../../assets/project-images/Asos.jpg";
import LovodoImg from "../../assets/project-images/lovodo.jpg";
import PortfolioImg from "../../assets/project-images/portfolio.png";
import WeatherImg from "../../assets/project-images/weatherApp.jpg";

const getProjectsData = [
  {
    img: PortfolioImg,
    bg_color: "#f799bb",
    title: "Portfolio",
    desc: "A Portfolio website to showcase my skills",
    tech_stack: "React js | Redux | Javascript | CSS3 | HTML5",
    team: "",
    github: "https://github.com/agodse21/amol-portfolio",
    link: "https://agodse21.github.io/amol-portfolio/",
  },
  {
    img: AsosImg,
    bg_color: "#FFCAD4",
    title: "Asos.com Clone",
    desc: "ASOS is a fashion brand for the newest & trending Cloths,fashion accessories and online shop that offered high quality products at an affordable price.",
    tech_stack:
      "React js | Redux | MongoDb | G-Pay | Express js | Node js | Javascript | CSS3 | HTML5",
    team: "A collaborative project built by a team of 5 executed in 5 days.",
    github: "https://github.com/agodse21/Asos_clone",
    link: "https://frontend-eight-lime.vercel.app/",
  },
  {
    img: WeatherImg,
    bg_color: "#9F70FD",
    title: "Weather App",
    desc: "Web application to show the current location's weather,search city weather and upcoming week weather forecast.showing the current map accourding to the location.",
    tech_stack:
      "React js | Redux | HTML5 | CSS3 | Chakra-UI | Javascript | Weather-API",
    team: "",
    github: "https://github.com/agodse21/weather-app",
    link: "https://agodse21.github.io/weather-app/",
  },
  {
    img: LovodoImg,
    bg_color: "#B4B4B8",
    title: "Lovodo.com Clone",
    desc: "LOVODA is a women's fashion brand for the newest & trending fashion accessories and online shop that offered high quality products at an affordable price.",
    tech_stack: "React js | Redux | Javascript | CSS3 | Firebase | HTML5",
    team: "A collaborative project built by a team of 4 executed in 5 days.",
    github: "https://github.com/vkrajput26/-crazy-science-2420",
    link: "https://lovoda-clone-three.vercel.app/",
  },
];

export default function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count, setCount] = useState(0);
  const currentProject = getProjectsData[count];

  return (
    <div id="projects" className="bg-primary p-20 pb-0 w-full">
      <span
        className="text-4xl font-semibold text-primary"
        style={{
          fontFamily: "Inria Serif",
        }}
      >
        Projects
      </span>
      <h1
        className="text-4xl mt-2 uppercase font-medium text-secondary"
        style={{
          fontFamily: "Paprika",
        }}
      >
        MY CREATION
      </h1>

      <div className="flex items-start">
        <img
          src="https://codeaprogram-portfolio.web.app/assets/person.3319b995.png"
          alt="about"
          className="w-[40%]"
        />
        <div className="w-full flex flex-col gap-4 items-center justify-start">
          <div className="bg-white flex flex-col gap-2 p-5 pb-2 shadow-lg rounded-2xl border-b-8 border-[#FAF9FD] h-fit w-[40%]">
            <div
              style={{
                backgroundColor: currentProject.bg_color,
              }}
              className="p-5 rounded-2xl"
            >
              <img
                className="w-80 h-28 shadow-xl rounded-sm"
                src={currentProject.img}
                alt={currentProject.title}
              />
            </div>
            <span className="text-base font-bold">{currentProject.title}</span>

            <HStack justify={"end"}>
              <Button
                className="hover:scale-110 duration-200"
                onClick={onOpen}
                variant={"outline"}
              >
                View Details
              </Button>
            </HStack>
          </div>
          <HStack>
            {getProjectsData.map((_, i) => (
              <span
                key={i}
                className="size-3 hover:scale-125 duration-200 rounded-[50%] cursor-pointer"
                style={{
                  backgroundColor: count === i ? "#06223f" : "#bdc7d1",
                }}
                onClick={() => setCount(i)}
              ></span>
            ))}
          </HStack>
        </div>
      </div>
      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay bg="whiteAlpha.600" />
        <ModalContent
          style={{
            fontFamily: "Poppins",
            borderRadius: "5px",
            border: "1px solid #06223f",
            boxShadow: "none",
          }}
          className="p-5 flex flex-col gap-2"
        >
          <div className="flex justify-between items-center">
            <span
              style={{
                fontFamily: "Paprika",
              }}
              className="text-primary font-semibold"
            >
              {currentProject.title}
            </span>
            <div className="flex items-center gap-2">
              <Link to={currentProject.link} target="_blank" rel="noreferrer">
                <IconButton
                  variant="outline"
                  aria-label="Project Link"
                  icon={<FiExternalLink />}
                />
              </Link>

              <Link to={currentProject.github} target="_blank" rel="noreferrer">
                <IconButton
                  aria-label="Project github link"
                  icon={<VscGithub />}
                  variant="outline"
                />
              </Link>
            </div>
          </div>
          <p className="text-base font-medium text-justify">
            {currentProject.desc}
          </p>
          <span>
            <b>Tech Stack : </b>
            {currentProject.tech_stack}
          </span>
          <span>{currentProject.team.length > 0 && currentProject.team}</span>
          <HStack justify={"end"} className="w-full mt-3">
            <Button
              onClick={onClose}
              border="2px"
              borderColor="#06223f"
              variant={"outline"}
              style={{
                borderRadius: "12px 2px 30px 8px",
              }}
              className="py-5 w-28"
            >
              Close
            </Button>
          </HStack>
        </ModalContent>
      </Modal>
    </div>
  );
}
