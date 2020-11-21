import React, {Component} from "react";
import "./header.css";
export default class Header extends Component {
  render() {
    return (
      <header>
        <div
          className="Header"
          // style={{
          //   backgroundImage:
          //     "url(" +
          //     "https://thumbs.gfycat.com/UnfoldedRedJaguarundi-small.gif" +
          //     ")",
          //   //   backgroundPosition: "center",
          //   //   backgroundSize: "cover",
          //   //   backgroundRepeat: "no-repeat",
          // }}
        >
          Vincent Servio
          <br />
          <div style={{fontSize: "36px", color: "white", border: "0px"}}>
            Full Stack Engineer
          </div>
          <br />
          {/* <button>View Projects</button> */}
          {/* <img alt=""></img>
          <div className="bottom">FIRST HAND EXPERIENCE</div> */}
          {/* <div className="background box">FIRST HAND EXPERIENCE</div> */}
        </div>
        {/* <img
          className="Header"
          src="https://thumbs.gfycat.com/UnfoldedRedJaguarundi-small.gif"
          alt="header"
        /> */}
      </header>
    );
  }
}
