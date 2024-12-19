import React from "react";
import { Col, Container, Nav, NavLink, Row } from "react-bootstrap";

const FooterBootstrap = () => {
  return (
    <div>
      <footer className="bg-dark text-light py-4">
        <Container>
          <Row>
            <Col md={4} className="mb-3">
              <h5>About Us</h5>
              <p>
                We are a leading platform offering top-notch products and
                services. Our mission is to deliver high-quality items to our
                customers with ease and efficiency.
              </p>
            </Col>
            <Col md={4} className="mb-3">
              <h5>Quick Links</h5>
              <Nav>
                <NavLink href="/" className="text-light">
                  Home
                </NavLink>
                <NavLink href="/products" className="text-light">
                  Products
                </NavLink>
                <NavLink href="/contact" className="text-light">
                  Contact Us
                </NavLink>
              </Nav>
            </Col>
            <Col md={4} className="mb-3">
              <h5>Follow Us</h5>
              <Nav>
                <NavLink href="https://facebook.com" className="text-light">
                  Facebook
                </NavLink>
                <NavLink href="https://twitter.com" className="text-light">
                  Twitter
                </NavLink>
                <NavLink href="https://instagram.com" className="text-light">
                  Instagram
                </NavLink>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-4">
              <p>&copy; 2024 Your Company. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default FooterBootstrap;
