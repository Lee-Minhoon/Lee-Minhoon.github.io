import { resume } from './resume';
import Header from './components/header/Container'
import Summary from './components/summary/Container'
import Skills from './components/skills/Container'
import Common from './components/common/Container'
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
        <Header contents={this.state.header}></Header>
        <Summary contents={this.state.summary}></Summary>
        <Skills contents={this.state.skills} ></Skills>
        <Common contents={this.state.experience}></Common>
        <Common contents={this.state.projects}></Common>
        <Common contents={this.state.awards}></Common>
        <Common contents={this.state.research}></Common>
        <Common contents={this.state.education} ></Common>
        <Common contents={this.state.certificate} ></Common>
        <Footer footer={this.state.footer}></Footer>
      </div >
    );
  }
}

export default App;
