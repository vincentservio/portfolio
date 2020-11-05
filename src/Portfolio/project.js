import React from "react";

export const Project = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            className="project-img"
            src="https://media1.giphy.com/media/4Z0cgPeXYc6EKLYKMv/source.gif"
            alt="Avatar"
            style={{width: "300px", height: "300px"}}
            hello
          />
        </div>

        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
};
