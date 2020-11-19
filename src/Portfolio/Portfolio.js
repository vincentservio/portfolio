import React, {Component} from "react";
import App from "../App";
import {Preview} from "./Preview";
import Project from "./project";

const projects = {
  TrackTab: {
    title: "TrackTab",
    img: "https://media1.giphy.com/media/4Z0cgPeXYc6EKLYKMv/source.gif",
    languages: "Ruby On Rails,React,Redux,CSS",

    description:
      "Allows artists to organize their tracks by progress status, as well as allowing them to store instrumental links and lyrics/notes.",
  },
  ChoreKeeper: {
    title: "ChoreKeeper",
    img: "https://media1.giphy.com/media/4Z0cgPeXYc6EKLYKMv/source.gif",
    languages: "JavaScript,Ruby On Rails,HTML,CSS ",
    description:
      "Allows users to add housemates and organize household chores. Users will organize their chores in a week’s span and assign days for each task.",
  },
  FeetLockers: {
    title: "FeetLockers",
    img:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6099bb77504057.5c895faa8d1d9.gif",
    languages: "Ruby On Rails,Sinatra,HTML,CSS ",
    description:
      "Allows users to add housemates and organize household chores. Users will organize their chores in a week’s span and assign days for each task.",
  },
};
const Portfolio = (props) => {
  // state ={
  //   new:
  // }
  // render() {

  // if (props === " hello"){

  // }

  const gif = <img src={props.gif} alt="img" />;
  const pro = Object.values(projects);
  const project = pro.map((app, i) => {
    return (
      <>
        <Project
          key={i}
          title={app.title}
          img={app.img}
          languages={app.languages}
          description={app.description}
        />
      </>
    );
  });

  return (
    <div>
      {project}
      {/* <div className={"overlay"}></div> */}

      <Preview gif={gif} />
    </div>
  );
  // if (gif !== undefined)
};
// }
export default Portfolio;
