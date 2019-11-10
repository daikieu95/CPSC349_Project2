import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Jumbotron, Image } from "react-bootstrap";

import reactjs from "./images/reactjs.png";
import python from "./images/python.png";
import unreal_engine from "./images/unreal_engine.png";

export default class Home extends Component {
  toRegistration = () => {
    this.props.history.push("/register");
  };

  render() {
    return (
      <React.Fragment>
        <header className="bg-dark text-light">
          <Container className="py-5 bg">
            <Row className="py-5">
              <Col md="6" className="mx-auto text-center">
                <h2 className="text-light">The Life of a Gamer.</h2>
                <p className="mb-4">
                  Wow! It's a beautiful day.
                  Time to play some games.
                </p>
                <Button variant="info" block onClick={this.toRegistration}>
                  Are you a true Gamer ? Then, you come to a right place !
                </Button>
              </Col>
            </Row>
          </Container>
        </header>
        <main role="main">
          <Container>
            <Row className="py-5">
              <Col md="4">
                <h3 style={{color: "red"}} className="text-center">ReactJS Games</h3>
                <p>
                  A modern programming Javascript library that enhance the quality of creating games.
                </p>
                <Image src={reactjs} alt="reactjs" fluid />
              </Col>
              <Col md="4">
                <h3 style={{color: "blue"}} className="text-center">Python Games</h3>
                <p>One of the best programming language that designed by Pygame library.</p>
                <Image src={python} alt="python" fluid />
              </Col>
              <Col md="4">
                <h3 style={{color: "green"}} className="text-center">Unreal Engine Games</h3>
                <p>
                Play our newest 3D games that designed to suit your best.
                </p>
                <Image src={unreal_engine} alt="unreal_engine" fluid />
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="text-center">
                <Link to="/register">Login Now &rarr;</Link>
              </Col>
            </Row>
          </Container>

          <Jumbotron className="bg-dark text-light">
            <Container className="py-5">
              <Row>
                <Col md="6" className="mx-auto">
                  <h2 className="text-center text-uppercase text-light">
                    Become our members & Play all day !
                  </h2> <br />
                  <Button
                    variant="info"
                    block
                    onClick={this.toRegistration}
                  >
                    Prove yourself a worthy Keyboard Hero !
                  </Button>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </main>
      </React.Fragment>
    );
  }
}
