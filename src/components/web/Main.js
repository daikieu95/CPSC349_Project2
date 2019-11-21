import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Row, Col, Container, Button } from "react-bootstrap";

import hangman from "./GamePics/hangman.jpg";
import snake from "./GamePics/snake.jpg";
import tictactoe from "./GamePics/tictactoe.jpg";
import alien_invasion from "./GamePics/alien_invasion.jpg";
import pacman from "./GamePics/pacman.jpg";
import mario from "./GamePics/mario.jpg";
import crossy_road from "./GamePics/crossy_road.jpg";

class Main extends Component {
  render() {
    return (
      <div>
      <p> You are Logged In! </p>
      <Link to="/home"> <button onclick = "facebookSignOut()"> Log Out! </button> </Link>
        <h2>List of Games</h2>
        <p>Here are all the games in our website that organized ino 2D or 3D placed within these categories.
        Have fun! & Enjoy :)</p>
        <ul>
          <ol>
          <b> <li style={{color: "orange"}}> 2D-Games </li> </b>
          <ul>
            <center> <b> <li style={{color: "red"}}>ReactJS</li> </b> </center>
          <Container>
            <Row className="py-5">
              <Col md="4">
                <h3 className="text-center">Hangman</h3>
                <p>
                It is a Word-Guessing Game. Answer the question to move on or Die.
                </p>
                <Image src={hangman} alt="hangmangame" fluid />
                <center> <Link to="/hangmangame"> <Button> Play &rarr; </Button> </Link></center>
              </Col>
              <Col md="4">
                <h3 className="text-center">Snake</h3>
                <p>
                Control the snake and search for the food. Relax and practice your reflexes.
                </p>
                <Image src={snake} alt="snake" fluid />
                <center> <Link to="/snakegame"> <Button> Play &rarr; </Button> </Link></center>
              </Col>
              <Col md="4">
                <h3 className="text-center">Tic Tac Toe</h3>
                <p>
                A 2 player Tic Tac Toe game. Can you beat your best friend?
                </p>
                <Image src={tictactoe} alt="tictactoe" fluid />
                <center> <Link to="/tictactoegame"> <Button> Play &rarr; </Button> </Link></center>
              </Col>
            </Row>
          </Container>
          <center> <b> <li style={{color: "blue"}}>Python</li> </b> </center>
          <Container>
            <Row className="py-5">
              <Col md="4">
                <h3 className="text-center">Space-Invaders</h3>
                <p>
                Control a spaceship to shoot the Aliens. Avoid destruction at all costs.
                </p>
                <Image src={alien_invasion} alt="alien_invasion" fluid />
                <center> <a href="https://github.com/daikieu95/Space-Invaders"> <Button> Download &rarr; </Button> </a></center>
              </Col>
              <Col md="4">
                <h3 className="text-center">Pacman</h3>
                <p>
                Control the Pacman to eat the fruit. Beware with the ghosts.
                </p>
                <Image src={pacman} alt="snake" fluid />
                <center> <a href="https://github.com/daikieu95/Pacman"> <Button> Download &rarr; </Button> </a></center>
              </Col>
              <Col md="4">
                <h3 className="text-center">Evil Super-Mario</h3>
                <p>
                A classic Mario has been transformed into Evil one.
                </p>
                <Image src={mario} alt="mario" fluid />
                <center> <a href="https://github.com/daikieu95/Evil_Super_Mario"> <Button> Download &rarr; </Button> </a></center>
              </Col>
            </Row>
          </Container>
          </ul>

          <b><li style={{color: "orange"}}> 3D-Games </li> </b>
            <ul>
              <center> <b> <li style={{color: "green"}}>Unreal Engine</li> </b> </center> <br />
                    <center> <h3 className="text-center">Crossy Road</h3> </center>
                    <center> <p>
                    Across the road as far as possible. Stay away from the vehicles at all costs.
                    </p> </center>
                    <center> <Image src={crossy_road} alt="crossy_road" fluid /> </center>
                    <center> <a href="https://github.com/daikieu95/CrossyRoad"> <Button> Download &rarr; </Button> </a></center>
              </ul>
          </ol>
        </ul>
      </div>
    );
  }
}

export default Main;
