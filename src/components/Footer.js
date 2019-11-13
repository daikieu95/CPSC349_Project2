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
            <Col md="3" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="border-bottom pb-2">Pages</h6>
              <Nav className="flex-column">
                <li> Login </li>
                <li> Register </li>
              </Nav>
            </Col>
            <Col md="3" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="border-bottom pt-md-0 py-2">Emergency</h6>
              <Nav className="flex-column">
                <li> Contact Us </li>
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
