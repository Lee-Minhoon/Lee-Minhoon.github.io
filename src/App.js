import Header from './components/Header'
import Skill from './components/Skill'
import Content from './components/Content'
import Footer from './components/Footer'
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          category: 'Frontend', techs: [
            'Java', 'C++'
          ]
        },
        {
          category: 'Backend', techs: [
            'Java', 'C++'
          ]
        }
      ],
      contents: [
        { title: '제목1', desc: '설명1' },
        { title: '제목2', desc: '설명2' },
        { title: '제목3', desc: '설명3' },
        { title: '제목4', desc: '설명4' }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Skill skills={this.state.skills} ></Skill>
        <Content contents={this.state.contents}></Content>
        <Footer></Footer>
      </div >
    );
  }
}

export default App;
