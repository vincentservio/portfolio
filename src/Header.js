import React, {Component} from "react";
import "./header.css";
export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="Header">
          Vincent Servio
          <br />
          <div style={{fontSize: "36px", color: "white", border: "0px"}}>
            Full Stack Engineer
          </div>
          <br />
        </div>
      </header>
    );
  }
}
