import { useState } from "react";
import { Row, Col, Button } from "reactstrap";
import about from "../../assets/about.svg";
import { IconContext } from "react-icons";
import { AiOutlineFileText } from "react-icons/ai";

import { Popup } from "../PopupWindow";

import "./About.css";
import "../../style/tooplate-style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const [isPopup, setIsPopup] = useState(false);

  return (
    <>
      <div className="popup-window">
        <Popup trigger={isPopup} setTrigger={setIsPopup}>
          <h5>Oops, sorry!</h5>
          <p>The file has not been uploaded. Please email to request.</p>
        </Popup>
      </div>
      <div className="container px-4" id="about">
        <Row>
          <Col lg="7" md="12" xs="12" className="about-text">
            <small className="small-text typed">
              Welcome to 
              <span className="mobile-block">my portfolio website!</span>
            </small>

            <h1 className="animated animated-text">
              <span>Hello, I'm </span>
              <div className="animated-info">
                <span className="animated-item">William</span>
                <span className="animated-item">Wei-Cheng</span>
              </div>
            </h1>
            <p>
              Senior majoring in computer science at National Yang Ming Chiao
              Tung University. Seeking opportunities to leverage my programming
              skills.
            </p>
            <div>
              <Button className="btn mr-lg-2 custom-btn" href="#" onClick={setIsPopup}>
                <IconContext.Provider
                  value={{
                    style: { verticalAlign: "middle", fontSize: "20px" },
                  }}
                >
                  <AiOutlineFileText />
                </IconContext.Provider>
                <span className="mx-1" style={{ verticalAlign: "middle" }}>
                  Download Resume
                </span>
              </Button>
            </div>
          </Col>
          <Col lg="5" md="12" xs="12" className="about-image">
            <img src={about} className="img-fluid" alt="img" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default About;
