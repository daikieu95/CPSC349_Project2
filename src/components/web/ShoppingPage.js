import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Row, Col, Container, Button } from "react-bootstrap";

import mouse1 from "./GamePics/mouse1.jpg";
import mouse2 from "./GamePics/mouse2.jpg";
import mouse3 from "./GamePics/mouse3.jpg";
import laptop1 from "./GamePics/laptop1.jpg";
import laptop2 from "./GamePics/laptop2.jpg";
import laptop3 from "./GamePics/laptop3.jpg";
import keyboard1 from "./GamePics/keyboard1.jpg";
import keyboard2 from "./GamePics/keyboard2.jpg";
import keyboard3 from "./GamePics/keyboard3.jpg";
import headphone1 from "./GamePics/headphone1.jpg";
import headphone2 from "./GamePics/headphone2.jpg";
import headphone3 from "./GamePics/headphone3.jpg";

class Shopping extends Component {
  render() {
    return (
      <div>
        <h2>Power of Gaming Gears</h2>
        <p>Here are all the gears in our website to make your gaming career shines.
        Dominate! & Conquer :)))</p>
        <ul>
          <ol>
          <b> <li style={{color: "red"}}>Best Choice</li> </b>
          <ul>
            <center> <b> <li style={{color: "blue"}}>Mouses</li> </b> </center>
          <Container>
            <Row className="py-5">
              <Col md="4">
                <Image src={mouse1} alt="razer-mouse" fluid />
                <h3 className="text-center">Razer DeathAdder</h3>
                <center> <p> $29.99</p> </center>
                <center> <Link to="/payment"> <Button> Buy Now </Button> </Link></center>
              </Col>
              <Col md="4">
              <Image src={mouse2} alt="corsair-mouse" fluid />
              <h3 className="text-center">Corsair-M65</h3>
              <center> <p> $39.99</p> </center>
              <center> <Link to="/payment"> <Button> Buy Now </Button> </Link></center>
              </Col>
              <Col md="4">
              <Image src={mouse3} alt="logitech-mouse" fluid />
              <h3 className="text-center">Logitech-G203</h3>
              <center> <p> $20.99</p> </center>
              <center> <Link to="/payment"> <Button> Buy Now </Button> </Link></center>
              </Col>
            </Row>
          </Container>
          <center> <b> <li style={{color: "teal"}}>Laptops</li> </b> </center>
          <Container>
            <Row className="py-5">
              <Col md="4">
              <Image src={laptop1} alt="msi-laptop" fluid />
              <h3 className="text-center">MSI Gaming</h3>
              <center> <p> $1999.99</p> </center>
              <center> <Link to="/payment"> <Button> Buy Now </Button> </Link></center>
              </Col>
              <Col md="4">
              <Image src={laptop2} alt="asus-laptop" fluid />
              <h3 className="text-center">ASUS Zephyrus</h3>
              <center> <p> $2199.99</p> </center>
              <center> <Link to="/payment"> <Button> Buy Now </Button> </Link></center>
              </Col>
              <Col md="4">
              <Image src={laptop3} alt="cyber-laptop" fluid />
              <h3 className="text-center">Cyber Power</h3>
              <center> <p> $1269.99</p> </center>
              <center> <Link to="/payment"> <Button> Buy Now </Button> </Link></center>
              </Col>
            </Row>
          </Container>
          </ul>

          <b> <li style={{color: "green"}}>Recommendation</li> </b>
          <ul>
            <center> <b> <li style={{color: "orange"}}>Keyboards</li> </b> </center>
          <Container>
            <Row className="py-5">
              <Col md="4">
                <Image src={keyboard1} alt="corsair-keyboard" fluid />
                <h3 className="text-center">Corsair-K70</h3>
                <center> <p> $89.99</p> </center>
                <center> <Link to="/payment"> <Button> Buy Now </Button> </Link></center>
              </Col>
              <Col md="4">
              <Image src={keyboard2} alt="razer-keyboard" fluid />
              <h3 className="text-center">Razer BlackWindow</h3>
              <center> <p> $129.99</p> </center>
              <center> <Link to="/payment"> <Button> Buy Now </Button> </Link></center>
              </Col>
              <Col md="4">
              <Image src={keyboard3} alt="hyper-keyboard" fluid />
              <h3 className="text-center">HyperX-Alloy</h3>
              <center> <p> $139.99</p> </center>
              <center> <Link to="/payment"> <Button> Buy Now </Button> </Link></center>
              </Col>
            </Row>
          </Container>
          <center> <b> <li style={{color: "red"}}>Headphones</li> </b> </center>
          <Container>
            <Row className="py-5">
              <Col md="4">
              <Image src={headphone1} alt="arctic-headphone" fluid />
              <h3 className="text-center">SteelSeries-Arctis 3 </h3>
              <center> <p>$61.99</p> </center>
              <center> <Link to="/payment"> <Button> Buy Now </Button> </Link></center>
              </Col>
              <Col md="4">
              <Image src={headphone2} alt="turtle-headphone" fluid />
              <h3 className="text-center">Turtle Beach</h3>
              <center> <p> $39.99</p> </center>
              <center> <Link to="/payment"> <Button> Buy Now </Button> </Link></center>
              </Col>
              <Col md="4">
              <Image src={headphone3} alt="alienware-headphone" fluid />
              <h3 className="text-center">Alienware</h3>
              <center> <p> $99.99</p> </center>
              <center> <Link to="/payment"> <Button> Buy Now </Button> </Link></center>
              </Col>
            </Row>
          </Container>
          </ul>
          </ol>
        </ul>
      </div>
    );
  }
}

export default Shopping;
