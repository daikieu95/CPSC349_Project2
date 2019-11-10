import React, { Component } from "react";
import { Image } from "react-bootstrap";

import dennis from "./dennis.jpg";
import trong from "./trong.jpg";
import member3 from "./member3.jpg";
import member4 from "./member4.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="true-about">
      <div className="row py-4">
      <div className="col-md-6">
          <div className="card">
              <Image src={dennis} alt="dennis" fluid />
             <div className="description">
             <h2 style={{color: "white"}}>Dennis Kieu</h2>
             <p style={{color: "orange"}} className="role">Role: Lead Developer</p>
             <p style={{color: "white"}}>Position: Both Front & Back-End</p>
             <p style={{color: "white"}}>kieucongdai@csu.fullerton.edu</p>
              </div>
          </div>
          </div>

      <div className="col-md-6">
          <div className="card">
          <Image src={trong} alt="trong" fluid />
          <div className="description">
             <h2 style={{color: "white"}}>Trong To</h2>
             <p style={{color: "white"}} className="role">Role: Developer</p>
             <p style={{color: "white"}}>Position: Front-End</p>
             <p style={{color: "white"}}>votinhnobody@csu.fullerton.edu</p>
          </div>
          </div>
      </div>
      </div>
      <div className="row py-6">
      <div className="col-md-6">
          <div className="card">
          <Image src={member3} alt="member3" fluid />
          <div className="description">
             <h2 style={{color: "white"}}>Member # 3</h2>
             <p style={{color: "white"}} className="role">Role: Developer</p>
             <p style={{color: "white"}}>Position: Front-End</p>
             <p style={{color: "white"}}>member3@csu.fullerton.edu</p>
          </div>
          </div>
          </div>

      <div className="col-md-6">
          <div className="card">
          <Image src={member4} alt="member4" fluid />
          <div className="description">
             <h2 style={{color: "white"}}>Member # 4</h2>
             <p style={{color: "white"}} className="role">Role: Developer</p>
             <p style={{color: "white"}}>Position: Front-End</p>
             <p style={{color: "white"}}>member4@csu.fullerton.edu</p>
          </div>
          </div>
      </div>
      </div>
      <br />
      </div>


    );
  }
}
