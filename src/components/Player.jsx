import { Container, Row, Col } from "react-bootstrap";
import play from "../assets/images/Play.png";
import previous from "../assets/images/Previous.png";
import shuffle from "../assets/images/Shuffle.png";
import next from "../assets/images/Next.png";
import repeat from "../assets/images/Repeat.png";

const Player = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <div>
        <Row className="row">
          <Col lg={10} className="offset-lg-2">
            <Col
              xs={6}
              md={4}
              lg={2}
              className="offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
            >
              <Row className="row">
                <div className="d-flex justify-content-between">
                  <a href="alt">
                    <img src={shuffle} alt="shuffle" />
                  </a>
                  <a href="alt">
                    <img src={previous} alt="shuffle" />
                  </a>
                  <a href="alt">
                    <img src={play} alt="shuffle" />
                  </a>
                  <a href="alt">
                    <img src={next} alt="shuffle" />
                  </a>
                  <a href="alt">
                    <img src={repeat} alt="shuffle" />
                  </a>
                </div>
              </Row>
            </Col>
            <Row className="justify-content-center playBar py-3">
              <Col xs={8} md={6} className="">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
            </Row>
          </Col>s
        </Row>
      </div>
    </Container>
  );
};

export default Player;