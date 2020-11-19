import React, {useState} from "react";
import Modal from "./Modal";
import Portfolio from "./Portfolio";

export default function Project(props) {
  const [isOpen, setIsOpen] = useState(false);

  const line = <h1 className="ocs">{props.title}</h1>;

  // const isClicked=
  if (isOpen === true) {
    return (
      <>
        <div className={"overlay"} />
        <div className={"ms"}>
          <img
            src={
              "https://thumbs.gfycat.com/FlatDescriptiveDonkey-size_restricted.gif"
            }
            alt="img"
          />
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </>
    );
  }
  return (
    <>
      {/* <img
        src="https://thumbs.gfycat.com/FlatDescriptiveDonkey-size_restricted.gif"
        alt="img"
      /> */}
      {/* {overlay}; */}
      <div className="flip-card">
        <h2 className="titles"> {props.title}</h2>
        <div className="flip-card-inner">
          <div
            className="flip-card-front"
            // style={{backgroundImage: `url(${this.props.img})`}}
          >
            <div className="lang">
              {props.languages.split(",").map((lang) => (
                <div> {lang} </div>
              ))}
            </div>
            <img
              className="project-img"
              src={props.img}
              alt="Avatar"
              // style={{width: "300px", height: "300px"}}
            />
          </div>
          <>
            <div className="flip-card-back">
              <p className="card-back">{props.description}</p>
              <div className="BWS">
                <button
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  OPEN
                </button>
                {/* <App overlay={isOpen}></App> */}

                {/* <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal> */}
              </div>
              <div className={"OCS"}>Other Content</div>
            </div>
          </>
        </div>
      </div>

      {/* <div className={"overlay"}/> ; */}
    </>
  );
}
