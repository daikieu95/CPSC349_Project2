import React, { Component } from "react";
import Facebook from './Facebook';
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  Image,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import login from "./login.jpg";

export default class LoginPage extends Component {


  render() {


    return (
      <main role="main">
        <Container className="my-5">
          <h1 className="my-5 text-center">Log In</h1>
          <center> <Image src={login} alt="gamer_logo" fluid /> </center>
          <Card>
            <Card.Body>
              <Form
                noValidate

                onSubmit={this.handleSubmit}
              >
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <Form.Control.Feedback type="invalid">

                    </Form.Control.Feedback>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <Form.Control.Feedback type="invalid">

                    </Form.Control.Feedback>
                  </Col>
                </Row>

                  <Row>
                    <Col className="text-center">
                      <Facebook />

                    </Col>
                  </Row>

                <Row className="text-center">
                  <Col sm="6">
                    <Link to="/register">New user?</Link>
                  </Col>


                  <Col sm="6">
                    <Link to="/forgot-password">Fogot Password?</Link>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </main>
    );
  }
}
