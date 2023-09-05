import FadeInSection from "../FadeInSection";

import "../../style/tooplate-style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Resume = () => {
  const TimeWrapper = (props) => {
    return (
      <>
        <div className="timeline-wrapper">
          <FadeInSection>
            <div className="timeline-yr">
              <span>{props.yr}</span>
            </div>
            <div className="timeline-info">
              <h3>
                <span>{props.pTitle}</span>
                <small>{props.pSubtitle}</small>
              </h3>
              <p>{props.children}</p>
            </div>
          </FadeInSection>
        </div>
      </>
    );
  };
  return (
    <>
      <div id="resume" className="container">
        <h2 className="my-4 text-center">Experiences</h2>
        <div className="d-flex justify-content-center">
          <div className="timeline">
            <TimeWrapper yr="2023" pTitle="Programmer" pSubtitle="Former junior">
              A programmer in Hsinchu, Taiwan
            </TimeWrapper>
            <TimeWrapper yr="2022" pTitle="Programmer" pSubtitle="Former Sophomore">
              A junior at NYCU.
            </TimeWrapper>
            <TimeWrapper yr="2021" pTitle="Student" pSubtitle="Former Freshman">
              A sophomore at NYCU.
            </TimeWrapper>
            <TimeWrapper yr="2020" pTitle="Student" pSubtitle="Former Child">
              A freshman at National Chiao Tung University (NCTU).
            </TimeWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
