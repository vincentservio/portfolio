import React from "react";
import Project from "./project";
import imag from "./ezgif.com-gif-maker (3).gif";
{
  /* <img src={imag} alt="new"></img> */
}

const projects = {
  TrackTab: {
    title: "TrackTab",
    img: "https://media1.giphy.com/media/4Z0cgPeXYc6EKLYKMv/source.gif",
    languages: "Ruby On Rails,React,Redux,CSS",
    gif: "https://s8.gifyu.com/images/keyTrack.gif",
    description:
      "Allows artists to organize their tracks by progress status, as well as allowing them to store instrumental links and lyrics/notes.",
  },
  ChoreKeeper: {
    title: "ChoreKeeper",
    img:
      "https://i.pinimg.com/originals/f5/fb/5e/f5fb5efe6b9f1d5f11f19e69f67f5ccf.gif",
    languages: "JavaScript,Ruby On Rails,HTML,CSS ",
    gif: "https://imgur.com/h9sNrDr.gif",

    description:
      "Allows users to add housemates and organize household chores. Users will organize their chores in a week’s span and assign days for each task.",
  },
  FeetLockers: {
    title: "FeetLockers",
    img:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6099bb77504057.5c895faa8d1d9.gif",
    languages: "Ruby On Rails,Sinatra,HTML,CSS ",
    gif: "https://s8.gifyu.com/images/keynote_sneaker.gif",

    description:
      "Allows users to add housemates and organize household chores. Users will organize their chores in a week’s span and assign days for each task.",
  },
};
const Portfolio = (props) => {
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
          gif={app.gif}
        />
      </>
    );
  });

  return <>{project}</>;
};

export default Portfolio;
