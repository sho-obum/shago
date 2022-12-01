import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo_sm from "../../assets/images/eco-logo.jpg";

const Footer = () => {
  const year = new Date().getFullYear;
  return (
    <footer className="footer pt-5">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo footer__logo">
              <img src={logo_sm} alt="Soafer Logo" className="footer__img" />
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title choco__w">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 choco ">
                  <Link to="#"> Chairs </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 choco">
                  <Link to="#"> Sofas </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 choco">
                  <Link to="#"> Cabinets </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 choco">
                  <Link to="#"> Comforter </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title choco__w">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 choco ">
                  <Link to="#"> Shop </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 choco">
                  <Link to="#"> Cart </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 choco">
                  <Link to="#"> Privacy Policy </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title choco__w">Contact Us</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 choco ">
                  <Link to="#">
                    <span>
                      <i class="ri-map-pin-line"></i>
                    </span>
                    <p>123 Bawana, New Delhi, India</p>
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 choco ">
                  <Link to="#">
                    <span>
                      <i class="ri-phone-line"></i>
                    </span>
                    <p>+91 9893-9875-89</p>
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 choco ">
                  <Link to="#">
                    <span>
                      <i class="ri-map-pin-line"></i>
                      <p>connect@shago.in</p>
                    </span>
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright text-center d-flex text-align-center justify-content-center">
              Made with &nbsp;<i class="ri-service-fill"></i>&nbsp; | Developed
              by Shubham
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
