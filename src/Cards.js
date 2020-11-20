import React, {Component} from "react";
class Cards extends Component {
  state = {
    icon: "",
    skill: "",
    program1: "",
    program2: "",
    program3: "",
    program4: "",
  };

  card = this.setState({
    icon: this.props.icon,
    skill: this.props.skill,
    program1: this.props.program1,
    program2: this.props.program2,
    program3: this.props.program3,
    program4: this.props.program4,
  });

  render() {
    return (
      <>
        <div className="card" style={{fontSize: "20px"}}>
          <img src={this.props.icon} alt="icon" className="icon" />
          <br />
          {this.props.skill}
          <br />
          <div style={{fontSize: "12px"}}>{this.props.program1}</div>
          <div style={{fontSize: "12px"}}>{this.props.program2}</div>
          <div style={{fontSize: "12px"}}>{this.props.program3}</div>
          <div style={{fontSize: "12px"}}>{this.props.program4}</div>
        </div>
      </>
    );
  }
}
export default Cards;
