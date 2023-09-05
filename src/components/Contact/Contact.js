import { useState } from "react";
import { Row, Col, Tooltip } from "reactstrap";
import { IconContext } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { MdOutlineWavingHand } from "react-icons/md";

import useRWD, { DeviceType } from "../../hooks/useRWD";

import "./Contact.css"
import "../../style/tooplate-style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const phone = "+886 979410823";
const email = "willwu0916@gmail.com";

const InfoText = () => {
  return (
    <>
      <div className="contact-info-item d-flex justify-content-center ps-lg-3 ps-md-0">
        <div>
          <h3 className="mb-3 text-white fst-italic fw-light">
            Say hello
            <IconContext.Provider
              value={{
                style: {
                  verticalAlign: "baseline",
                  fontSize: "20px",
                  marginLeft: "1em",
                },
              }}
            >
              <MdOutlineWavingHand />
            </IconContext.Provider>
          </h3>
          <a href={`tel:${phone}`}>
            <p className="mb-0">{phone}</p>
          </a>
          <a href={`mailto:${email}`}>
            <p>{email}</p>
          </a>
        </div>
      </div>
    </>
  );
};

const InfoIcon = (props) => {
  const { param, tid } = props;
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  const targetId = `contact-tip-${tid}`;
  const dType = useRWD();
  return (
    <>
      <li className="contact-info-icon d-flex justify-content-center pe-lg-5 pe-md-0">
        <div className="pe-lg-5 pe-md-0">
          <div id={targetId} className="px-3 pt-1">
            <a href={param.tip} target="_blank" rel="noopener noreferrer">
              <IconContext.Provider
                value={{
                  style: { verticalAlign: "baseline", fontSize: "25px" },
                }}
              >
                {param.icon}
              </IconContext.Provider>
            </a>
          </div>
          <Tooltip
            placement={dType === DeviceType.Phone ? tid === 0 ? "top" : "bottom" : "left"}
            isOpen={tooltipOpen}
            autohide={false}
            target={targetId}
            toggle={toggle}
          >
            <a
              href={param.tip}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1"
            >
              {param.tip}
            </a>
          </Tooltip>
        </div>
      </li>
    </>
  );
};

const InfoIcons = () => {
  return (
    <>
      <ul className="social-links mt-4">
        {[
          {
            icon: <AiFillGithub />,
            tip: "https://github.com/WlmWu",
          },
          {
            icon: <BiLogoLinkedin />,
            tip: "https://www.linkedin.com/in/wei-cheng-wu-00243b242",
          },
        ].map((tipParam, index) => {
          return (
            <InfoIcon
              key={`contact-tip-${index}`}
              param={tipParam}
              tid={index}
            />
          );
        })}
      </ul>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <div id="contact" className="container contact-info  py-5 px-5 mt-5">
        <Row>
          <Col lg="6" md="6" sm="12" className="borde pt-3">
            <InfoText />
          </Col>
          <Col lg="6" md="6" sm="12" className="borde pt-4">
            <InfoIcons />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Contact;
