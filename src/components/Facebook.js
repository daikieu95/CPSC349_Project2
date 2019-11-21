import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { Link } from "react-router-dom";
import { Button} from "react-bootstrap";
export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    // console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome, {this.state.name}</h2>
          Email: {this.state.email}
          <Link to="/main"><Button
                        className="mb-4"
                        variant="primary"
                        type="submit"
                        name='signup'
                        block
                      >
                        Login
                      </Button> </Link>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="2409252209393259" // Use your own Facebook appID on firebase to login. This is my ID for Dennis Kieu account.
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}
