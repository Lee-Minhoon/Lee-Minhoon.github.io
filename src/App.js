import { resume } from './resume';
import Header from './components/header/Container'
import Summary from './components/summary/Container'
import Skills from './components/skills/Container'
import Main from './components/main/Container'
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
        <Main contents={this.state.experience}></Main>
        <Main contents={this.state.projects}></Main>
        <Main contents={this.state.awards}></Main>
        <Main contents={this.state.research}></Main>
        <Main contents={this.state.education} ></Main>
        <Main contents={this.state.certificate} ></Main>
        <Footer footer={this.state.footer}></Footer>
      </div >
    );
  }
}

export default App;
