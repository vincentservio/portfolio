import React, {Component} from "react";
import Cards from "./Cards";

export default class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <Cards
          icon={"https://img.icons8.com/dotty/80/000000/source-code.png"}
          skill={"Front End"}
          program1={"JavaScript"}
          program2={"React/Redux"}
          program3={"HTML5"}
          program4={"CSS"}
        />

        <Cards
          icon={"https://img.icons8.com/ios-filled/80/000000/database.png"}
          skill={"SERVER"}
          program1={"JavaScript"}
          program2={"React/Redux"}
          program3={"HTML5"}
          program4={"CSS"}
        />
        <Cards
          icon={"https://img.icons8.com/ios-filled/80/000000/database.png"}
          skill={"DATABASE"}
          program1={"JavaScript"}
          program2={"React/Redux"}
          program3={"HTML5"}
          program4={"CSS"}
        />
        <Cards
          icon={
            "https://img.icons8.com/ios-filled/80/000000/upload-to-cloud.png"
          }
          skill={"DEVELOPMENT"}
          program1={"JavaScript"}
          program2={"React/Redux"}
          program3={"HTML5"}
          program4={"CSS"}
        />
        {/* <div className="card"></div> */}
      </div>
    );
  }
}
//   card1: {
//     icon: "",
//     skill: "Front End",
//     program1: "JavaScript",
//     program2: "React/Redux",
//     program3: "HTML5",
//     program4: "CSS",
//   },
//   card2: {
//     icon: "",
//     skill: "Server",
//     program1: "Ruby On Rails",
//     program2: "Sinatra",
//     program3: "JSON",
//     program4: "Ruby",
//   },
// };
