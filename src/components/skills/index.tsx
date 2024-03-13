import CssIcon from "../../assets/skills-icon/css.svg";
import ExpressIcon from "../../assets/skills-icon/express-js-icon.svg";
import HtmlIcon from "../../assets/skills-icon/html.svg";
import JsIcon from "../../assets/skills-icon/javascript.svg";
import MongoIcon from "../../assets/skills-icon/mongoDB.svg";
import NodeIcon from "../../assets/skills-icon/nodejs-icon.svg";
import ReactIcon from "../../assets/skills-icon/react.svg";
import TsIcon from "../../assets/skills-icon/typescript.svg";

import { skillsArray } from "../../lib/utils";

const getIconsBasedOnSkills = (skill: string) => {
  switch (skill) {
    case "HTML":
      return HtmlIcon;
    case "CSS":
      return CssIcon;

    case "JavaScript":
      return JsIcon;

    case "TypeScript":
      return TsIcon;

    case "React.js":
      return ReactIcon;

    case "Node.js":
      return NodeIcon;
    case "Express.js":
      return ExpressIcon;
    case "MongoDB":
      return MongoIcon;

    default:
      return "";
  }
};

export default function Skills() {
  return (
    <div id="skills" className="p-20 bg-primary w-full">
      <span
        className="text-4xl font-semibold text-primary"
        style={{
          fontFamily: "Inria Serif",
        }}
      >
        Skills
      </span>
      <h1
        className="text-4xl mt-2 font-medium text-secondary"
        style={{
          fontFamily: "Paprika",
        }}
      >
        MY TOP SKILLS
      </h1>

      <div className="grid grid-cols-4 m-auto mt-7 w-[90%] gap-3">
        {skillsArray.map((skill, i) => (
          <div
            key={i}
            className="bg-white sm:cursor-pointer relative group w-full flex items-center
            gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 aos-init aos-animate"
          >
            <img
              className="w-10 rounded-md h-10 group-hover:scale-125 duration-200"
              src={getIconsBasedOnSkills(skill.lebal)}
              alt={skill.lebal}
            />
            <span
              style={{
                fontFamily: "Paprika",
              }}
              className="text-primary font-semibold"
            >
              {skill.lebal}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
