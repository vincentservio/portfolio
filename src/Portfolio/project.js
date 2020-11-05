import React from "react";

export const Project = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src="https://33.media.tumblr.com/fd9d059cc9ac4a508b7b16fcdf47453f/tumblr_niwkp3bqFF1u90wj0o1_500.gif"
            alt="Avatar"
            style={{width: "300px", height: "300px"}}
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
