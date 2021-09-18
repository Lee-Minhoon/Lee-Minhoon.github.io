import { header, intro, skills, main, footer } from "./resume";
import Header from "./components/header/Container";
import Intro from "./components/intro/Container";
import Skills from "./components/skills/Container";
import Main from "./components/main/Container";
import Footer from "./components/Footer";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header contents={header} />
        <Intro contents={intro} />
        <Skills contents={skills} />
        {main.map((content, i) => <Main key={`${i}_content`} contents={content} />)}
        <Footer footer={footer} />
      </div>
    );
  }
}

export default App;
