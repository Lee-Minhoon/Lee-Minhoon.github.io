import {
  headerContent,
  mainContents,
  skillsContent,
  footer,
  summaryContent,
} from "./resume";
import Header from "./components/header/Container";
import Summary from "./components/summary/Container";
import Skills from "./components/skills/Container";
import Main from "./components/main/Container";
import Footer from "./components/Footer";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header contents={headerContent} />
        <Summary contents={summaryContent} />
        <Skills contents={skillsContent} />
        {mainContents.map((content, i) => (
          <Main key={`${i}_content`} contents={content} />
        ))}
        <Footer footer={footer} />
      </div>
    );
  }
}

export default App;
