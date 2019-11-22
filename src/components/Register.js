import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Container, Card, Form, Row, Col, Image, Button, Spinner} from "react-bootstrap";
import gamer_logo from "./gamer_logo.jpg";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      checking: false,
      error: "",
      img: null,
      username: "",
      email: "",
      password: "",
      repassword: "",
      link: ""
    };
  }
  isValid(form) {
    const data = new FormData(form);
    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");
    const repassword = data.get("repassword");
    const link = data.get("link");

    let valid = true;

    form[0].setCustomValidity("Invalid");

    if (!username) {
      this.setState({ username: "Please create your username." });
      valid = false;
    } else {
      if (!/\S+\x20\S+/.test(username)) {
        this.setState({ username: "Please enter your username." });
        form[0].focus();
        valid = false;
      } else {
        form[0].setCustomValidity("");
      }
    }

    form[1].setCustomValidity("Invalid");

    if (!email) {
      this.setState({ email: "Please enter a your email." });
      valid = false;
    } else {
      if (!/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
        this.setState({ email: "Please enter a valid email." });
        valid = false;
      } else {
        form[1].setCustomValidity("");
      }
    }

    form[2].setCustomValidity("Invalid");

    if (!password) {
      this.setState({ password: "Please enter a password." });
      valid = false;
    } else {
      valid = false;

      if (!/[A-Z]/.test(password)) {
        this.setState({
          password: "Your password must contain at least one uppercase letter."
        });
      } else if (!/[a-z]/.test(password)) {
        this.setState({
          password: "Your password must contain at least one lowercase letter."
        });
      } else if (!/[0-9]/.test(password)) {
        this.setState({
          password: "Your password must contain at least one number."
        });
      } else if (!/[^a-zA-Z\d]/.test(password)) {
        this.setState({
          password: "Your password must contain at least one special character."
        });
      } else if (password.length < 8) {
        this.setState({
          password: "Your password must contain at least eight characters."
        });
      } else {
        form[2].setCustomValidity("");
        valid = true;
      }
    }

    form[3].setCustomValidity("Invalid");

    if (!repassword) {
      this.setState({ repassword: "Please enter a password." });
      valid = false;
    } else {
      if (repassword !== password) {
        this.setState({
          repassword: "Passwords do not match."
        });
        valid = false;
      } else {
        form[3].setCustomValidity("");
      }
    }

    form[5].setCustomValidity("Invalid");

    if (!link) {
      this.setState({ link: "Please enter a link." });
      valid = false;
    } else {
      form[5].setCustomValidity("");
    }

    this.setState({ validated: true });

    return valid;
  }

  showImage = event => {
    this.setState({
      img: URL.createObjectURL(event.target.files[0])
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const form = event.target;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    if (this.isValid(form)) {
      this.setState({ checking: true });
    } else {
      this.setState({ checking: false, error: "Please check the form." });
    }
  };

  render() {
    const {
      validated,
      checking,
      error,
      username,
      email,
      password,
      repassword,
    } = this.state;

    return (
      <main role="main">
        <Container className="my-5 text-center">
          <h1 className="my-5">Registration</h1>
          <center> <Image src={gamer_logo} alt="gamer_logo" fluid /> </center>
          <Card>
            <Card.Body>
              <Form
                noValidate
                validated={validated}
                onSubmit={this.handleSubmit}
              >
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      name="username"
                      required
                      autoFocus={true}
                    />
                    <Form.Control.Feedback type="invalid">
                      {username}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="email"
                      placeholder="Email address"
                      name="email"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {email}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {password}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      name="repassword"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {repassword}
                    </Form.Control.Feedback>
                  </Col>
                </Row>

                {checking && (
                  <Row className="mb-4 text-center">
                    <Col>
                      <Spinner animation="grow" />
                    </Col>
                  </Row>
                )}
                {error && (
                  <Row className="mb-4 text-center">
                    <Col>
                      <span className="text-danger">{error}</span>
                    </Col>
                  </Row>
                )}
                {!checking && (
                  <Row>
                    <Col className="text-center">
                      <Link to="/login"> <Button onClick={e => window.alert("Successfully Registered!")} >Submit</Button> </Link>
                    </Col>
                  </Row>
                )}
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </main>
    );
  }
}
