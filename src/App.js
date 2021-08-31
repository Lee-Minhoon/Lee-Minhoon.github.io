import { resume } from './resume';
import Header from './components/Header'
import Summary from './components/Summary'
import Education from './components/education/Wrapper'
import Skills from './components/skills/Wrapper'
import Common from './components/common/Wrapper'
import Footer from './components/Footer'
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = resume;
  }
  render() {
    return (
      <div className="App">
        <Header header={this.state.header}></Header>
        <Summary summary={this.state.summary}></Summary>
        <Education contents={this.state.education} ></Education>
        <Skills contents={this.state.skills} ></Skills>
        <Common contents={this.state.experience}></Common>
        <Common contents={this.state.projects}></Common>
        <Common contents={this.state.awards}></Common>
        <Common contents={this.state.research}></Common>
        <Footer footer={this.state.footer}></Footer>
      </div >
    );
  }
}

export default App;
