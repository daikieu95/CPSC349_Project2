import React, { Component } from "react";
import {
  Container,
  Card,
  Form,
  Row,
  Col,
  Button,
  Spinner
} from "react-bootstrap";

export default class ForgotPasswordPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      checking: false,
      email: ""
    };
  }

  isValid(form) {
    const data = new FormData(form);
    const email = data.get("email");

    let valid = false;

    form[0].setCustomValidity("Invalid");

    if (!email) {
      this.setState({ email: "Please enter a your email." });
    } else {
      if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/.test(email)) {
        this.setState({ email: "Please enter a valid email." });
      } else {
        form[0].setCustomValidity("");
        valid = true;
      }
    }

    this.setState({ validated: true });

    return valid;
  }

  handleSubmit = event => {
    event.preventDefault();

    const form = event.target;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    if (this.isValid(form)) {
      this.setState({ checking: true });
      console.log("Call api to check to get token");
    }
  };

  render() {
    const { validated, checking, email } = this.state;

    return (
      <main role="main">
        <Container className="my-5">
          <h1 className="my-5 text-center">Forgot Password</h1>

          <Card>
            <Card.Body>
              <p className="mb-4">
                If you forgot your password, enter your email and we will send
                you instruction on how to reset your password.
              </p>
              <Form
                noValidate
                validated={validated}
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
                      {email}
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
                <Row>
                  <Col className="text-center">
                    <Button
                      className="mb-4"
                      variant="primary"
                      type="submit"
                      block
                    >
                      Reset Password
                    </Button>
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
