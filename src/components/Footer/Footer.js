import { Row, Col } from "reactstrap";

import "./Footer.css"
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <footer className="footer pb-2">
        <div className="container p-0">
          <Row>
            <Col lg="12">
              <p className="copyright-text text-center">
                Design inspired by{" "}
                <a rel="nofollow" href="https://www.facebook.com/tooplate">
                  Tooplate
                </a>
              </p>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Footer;
