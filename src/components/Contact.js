import React, { Component } from "react";
import {
  Container,
  Card,
  Image,
  Form,
  Row,
  Col,
  Spinner,
  Button,
  Modal
} from "react-bootstrap";
import contact_error from "./contact_error.jpg";

export default class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      validated: false,
      checking: false,
      error: "",
      fullName: "",
      email: ""
    };
  }

  isValid(form) {
    const data = new FormData(form);
    const fullName = data.get("fullName");
    const email = data.get("email");

    let valid = true;

    form[0].setCustomValidity("Invalid");

    if (!fullName) {
      this.setState({
        fullName: "Please enter your full name so that we may identify you."
      });
      valid = false;
    } else {
      if (!/\S+\x20\S+/.test(fullName)) {
        this.setState({ fullName: "Please enter your first and last name." });
        form[0].focus();
        valid = false;
      } else {
        form[0].setCustomValidity("");
      }
    }

    form[1].setCustomValidity("Invalid");

    if (!email) {
      this.setState({
        email: "Please enter your email so that we may get in touch with you."
      });
      valid = false;
    } else {
      if (!/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
        this.setState({ email: "Please enter a valid email." });
        valid = false;
      } else {
        form[1].setCustomValidity("");
      }
    }

    this.setState({ validated: true });

    return valid;
  }

  handleClose = () => {
    this.setState({ show: false });

    this.props.history.push("/");
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
    const { show, validated, checking, error, fullName, email } = this.state;

    return (
      <main role="main">
        <Container className="my-5 text-center">
          <h1 className="my-5">Contact Us</h1>
          <center> <Image src={contact_error} alt="gamer_logo" fluid /> </center>

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
                      name="fullName"
                      placeholder="Full Name"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {fullName}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Email"
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
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a subject so that we may prioritize your
                      message.
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Control
                      as="textarea"
                      rows="5"
                      name="message"
                      placeholder="Message"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a message.
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
                      <Button variant="primary" type="submit" block>
                        Submit
                      </Button>
                    </Col>
                  </Row>
                )}
              </Form>
            </Card.Body>
          </Card>
          <Modal show={show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>We have recieved your message</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Thank you for contacting us, we will read your message as soon as
              possible!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </main>
    );
  }
}
