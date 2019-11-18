import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Jumbotron, Row, Col, Nav } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="true-footer">
          <Row>
            <Col md="3" className="mb-4 mb-md-0 text-center">
              Game-World
            </Col>
            <Col md="2" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="border-bottom pb-2">Pages</h6>
              <Nav className="flex-column">
              <LinkContainer exact to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer exact to="/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
              </Nav>
            </Col>
            <Col md="2" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="border-bottom pt-md-0 py-2">Emergency</h6>
              <Nav className="flex-column">
              <LinkContainer exact to="/about">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer exact to="/contact">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
              </Nav>
            </Col>
            <Col md="2" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="border-bottom pt-md-0 py-2">Entertainment</h6>
              <Nav className="flex-column">
              <LinkContainer exact to="/main">
                <Nav.Link>Games</Nav.Link>
              </LinkContainer>
              <LinkContainer exact to="/shopping">
                <Nav.Link>Shopping</Nav.Link>
              </LinkContainer>
              </Nav>
            </Col>
            <Col md="2" className="text-center text-md-right">
              &copy; 2019 The Exiles
            </Col>
          </Row>
        </div>
      </footer>
    );
  }
}
