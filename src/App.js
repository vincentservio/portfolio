import "./App.css";
import "./header.css";
import Header from "./Header";
import {Mission} from "./Mission";
import {Languages} from "./Languages";
import Skills from "./Skills";
import Portfolio from "./Portfolio/Portfolio";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Header />
      <br />
      <div className="titles">
        Web Developer
        <br />
        With Hands On Experience
      </div>
      <Languages />
      <Mission />
      <br />
      <Skills />
      <div className="portfolio">PROJECT PORTFOLIO</div>
      <Portfolio />
      {/* </header> */}
    </div>
  );
}

export default App;
