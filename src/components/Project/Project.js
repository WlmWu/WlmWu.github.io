import { Row, Col } from "reactstrap";
import OwlCarousel from "react-owl-carousel";
import { IconContext } from "react-icons";
import { AiOutlineCode } from "react-icons/ai";

import useFetch from "../../hooks/useFetch";

import "./Project.css"
import "../../style/tooplate-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const MyProjects = (props) => {
  const repos = useFetch(props.url);
  const ProjectSection = (props) => {
    return (
      <div className="item">
        <div className="project-box mx-5">
          <div className="project-info py-5 m-5 border rounded">
            {props.children}
          </div>
        </div>
      </div>
    );
  };
  const res = repos.map((repo, i)=>{
    return(
      <ProjectSection key={`project-${repo.id}`}>
        <div className="project-content">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-title fw-bold"
          >
            {repo.name}
          </a>
          <p>{repo.description}</p>
        </div>
        <br />
        {repo.language ? (
          <p className="fst-italic">
            <IconContext.Provider
              value={{
                style: {
                  verticalAlign: "middle",
                  marginBottom: "4px",
                  marginRight: "4px",
                },
              }}
            >
              <AiOutlineCode />
            </IconContext.Provider>
            {repo.language}
          </p>
        ) : (
          <p>{" "}</p>
        )}
      </ProjectSection>
    )
  })
  return (
    <>
      {res.length === 0 ? (
        <ProjectSection>
          <p>
            Oops, something is wrong. Please Visit{" "}
            <a href={props.url}>My Github Repo</a>
          </p>
        </ProjectSection>
      ) : (
        <OwlCarousel className="owl-theme" loop margin={10} nav items={1}>
          {res}
        </OwlCarousel>
      )}
    </>
  );
};

const Project = () => {
  const url = "https://api.github.com/users/wlmwu/repos";

  return (
    <>
      <div id="project" className="container">
        <Row>
          <Col lg="11" className="text-center mx-auto col-12">
            <div className="col-lg-8 mx-auto">
              <h2>My Repositories on GitHub</h2>
            </div>
            <MyProjects url={url} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Project;
