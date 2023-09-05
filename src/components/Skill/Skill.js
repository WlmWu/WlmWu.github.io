import {
  BiSolidDownArrow,
  BiLogoCPlusPlus,
  BiLogoPython,
  BiLogoPhp,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoDocker,
} from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { IoHardwareChipOutline } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { LiaRProject } from "react-icons/lia";
import { ReactComponent as MatlabIcon } from "../../assets/matlab.svg";

import { IconContext } from "react-icons";

import ReelSection from "../ReelSection";

import "./Skill.css";

const skills = [
  <>
    <BiLogoCPlusPlus /> C++
  </>,
  <>
    <BiLogoPython /> Python
  </>,
  <>
    <BiLogoPhp style={{ fontSize: "42px" }} /> PHP
  </>,
  <>
    <GrMysql /> MySQL
  </>,
  <>
    <BiLogoReact /> ReactJS
  </>,
  <>
    <BiLogoJavascript /> JavaScript
  </>,
  <>
    <IoHardwareChipOutline style={{ fontSize: "30px" }} /> Verilog
  </>,
  <>
    <LiaRProject /> R
  </>,
  <>
    <MatlabIcon className="matlab-icon" /> MATLAB
  </>,
  <>
    <FaGitAlt /> Git
  </>,
  <>
    <BiLogoDocker style={{ fontSize: "36px" }} /> Docker
  </>,
];

const Skill = () => {
  return (
    <>
      <div className="container" id="skill">
        <h2 className="my-4 text-center">Skills</h2>
        <div className="d-flex justify-content-center">
          <IconContext.Provider
            value={{
              style: {
                fontSize: "32px",
                marginBottom: "4px",
              },
            }}
          >
            <ReelSection>
              {[
                <>
                  <BiSolidDownArrow style={{ fontSize: "20px" }} /> Scroll Down{" "}
                  <BiSolidDownArrow style={{ fontSize: "20px" }} />
                </>,
                ...skills,
              ].map((skill, i) => {
                return (
                  <p
                    key={`skill-${i}`}
                    className={i ? "fw-semibold font-monospace" : "fw-light"}
                  >
                    {skill}
                  </p>
                );
              })}
            </ReelSection>
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
};

export default Skill;
