import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import "../styles/Footer.css";
import "../styles/Buttons.css";
import logo from "../styles/images/logo-white.svg";
import background from "../styles/images/footer-background.png";
import backgroundMobile from "../styles/images/footer-background-mobile.png";
import FanUserToggle from "./FanUserToggle";
import ArtistUserToggle from "./ArtistUserToggle";

function Footer() {
  const location = useLocation();
  var userToggle;
  var waitlistButton;
  if (location.pathname === "/") {
    userToggle = <FanUserToggle />;
    waitlistButton = (
      <Link
        to={{ pathname: "https://1vd6ke3g2u4.typeform.com/to/BDLe1YBE" }}
        target="_blank"
      >
        <Button variant="outline-light" className="footer-button">
          JOIN WAITLIST
        </Button>
      </Link>
    );
  } else if (location.pathname === "/artist") {
    userToggle = <ArtistUserToggle />;
    waitlistButton = (
      <Link
        to={{ pathname: "https://1vd6ke3g2u4.typeform.com/to/BYLLLPlb" }}
        target="_blank"
      >
        <Button variant="outline-light" className="footer-button">
          JOIN ARTIST WAITLIST
        </Button>
      </Link>
    );
  }

  return (
    <Container fluid className="footer-container" id="footer">
      <Container className="footer-inner-container">
        <Container
          className="footer-text-wrapper"
          style={{ backgroundImage: `url(${background})` }}
        >
          <h1 className="footer-title">
            Want your gift to also be an investment in your favorite artists?
          </h1>
          <Row>
            <Col md={7} xs={12}>
              <p className="footer-subtitle">
                Sign up to get notified when Cadenza launches!
              </p>
            </Col>
            <Col className="footer-col-right">{waitlistButton}</Col>
          </Row>
        </Container>

        <Container
          className="footer-text-wrapper-mobile"
          style={{ backgroundImage: `url(${backgroundMobile})` }}
        >
          <h1 className="footer-title">
            Want your gift to also be an investment in your favorite artists?
          </h1>
          <Row>
            <Col md={7} xs={12}>
              <p className="footer-subtitle">
                Sign up to get notified when Cadenza launches!
              </p>
            </Col>
            <Col className="footer-col-right">{waitlistButton}</Col>
          </Row>
        </Container>

        <Row xs={1} md={4} className="footer-row">
          <Col md={2}>
            <Image src={logo} className="footer-logo" />
          </Col>
          <Col
            className="footer-col-left d-flex justify-content-center justify-content-md-start fan-artist-toggle"
            md={6}
          >
            {userToggle}
          </Col>
          <Col md={4}>
            <Row>
              <Col className="footer-col-right">
                <a
                  href="mailto:anishtech1@gmail.com?subject=Contact Cadenza"
                  className="footer-link"
                >
                  Contact
                </a>
              </Col>
              <Col className="footer-col-right">
                <a
                  href="mailto:anishtech1@gmail.com?subject=Opportunities at Cadenza"
                  className="footer-link"
                >
                  Careers
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="footer-col-left">
            <p className="footer-copyright">
              Cadenza Inc. © 2021. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
