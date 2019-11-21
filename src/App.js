import React, { Component } from "react";
import { Route, NavLink, HashRouter} from "react-router-dom";
import { Image } from "react-bootstrap";
import gamer from "./gamer.jpg";
import game_world from "./game_world.gif";

import Home from "./components/Home";
import About from "./components/About"
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/web/Main";
import Contact from "./components/Contact";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import ShoppingPage from "./components/web/ShoppingPage";
import PaymentPage from "./components/PaymentPage";
import Footer from "./components/Footer";

import HangmanGame from "./components/Hangman/HangmanGame";
import SnakeGame from './components/Snake/SnakeGame';
import TicTacToeGame from './components/TicTacToe/TicTacToeGame';


class App extends Component {
	render() {
	return (
		<HashRouter>
        <div className="container">
          <center> <Image src={game_world} alt="gamee-world" fluid /> </center>
          <ul className="header">
						<li><Image src={gamer} alt="gamer-icon" fluid /> </li>
            <li><NavLink to="/">Home</NavLink></li>
						<li><NavLink to="/about">About</NavLink></li>
						<li><NavLink to="/register">Register</NavLink></li>
						<li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
						<li><NavLink to="/shopping">Shopping</NavLink> </li>
						<br />
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
						<Route exact path="/about" component={About}/>
						<Route path="/login" component={Login}/>
						<Route path="/register" component={Register}/>
            <Route path="/main" component={Main}/>
            <Route path="/contact" component={Contact}/>
						<Route path="/shopping" component={ShoppingPage}/>
						<Route path="/payment" component={PaymentPage}/>
						<Route path="/forgot-password" component={ForgotPasswordPage}/>
            <Route path="/hangmangame" component={HangmanGame}/>
						<Route path="/snakegame" component={SnakeGame}/>
						<Route path="/tictactoegame" component={TicTacToeGame}/>
          </div>
        </div>
				<Footer />
      </HashRouter>
	);
}
}

export default App;
