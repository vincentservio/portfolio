import "./App.css";
import "./header.css";
import Header from "./Header";
import {Mission} from "./Mission";
import {Languages} from "./Languages";
import Skills from "./Skills";
import Portfolio from "./Portfolio/Portfolio";
import {Footer} from "./Footer";

function App() {
  return (
    <div className="App">
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
      <div className="titles">PROJECT PORTFOLIO</div>
      <Portfolio />
      <img src="/public/Animated GIF-downsized_large.gif" alt="img" />
      <Footer />
    </div>
  );
}

export default App;
