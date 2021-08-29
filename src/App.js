import { resume } from './resume';
import Header from './components/Header'
import Summary from './components/Summary'
import Education from './components/Education'
import Skills from './components/Skills'
import Contents from './components/Contents'
import Footer from './components/Footer'
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0';
    document.getElementsByTagName('head')[0].appendChild(meta);
    this.state = resume;
  }
  render() {
    return (
      <div className="App">
        <Header header={this.state.header}></Header>
        <Summary summary={this.state.summary}></Summary>
        <Education education={this.state.education} ></Education>
        <Skills skills={this.state.skills} ></Skills>
        <Contents contents={this.state.experience}></Contents>
        <Contents contents={this.state.projects}></Contents>
        <Contents contents={this.state.awards}></Contents>
        <Contents contents={this.state.research}></Contents>
        <Footer footer={this.state.footer}></Footer>
      </div >
    );
  }
}

export default App;
