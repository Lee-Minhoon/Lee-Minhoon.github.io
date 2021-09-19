import { Component } from "react";
import { header, intro, skills, main, footer } from "../resume";
import { Header, Intro, Skills, Main, Footer } from "../components/index"
import styles from "../styles.module.scss"

class Resume extends Component {
  render() {
    return (
      <div className={styles.Resume}>
        <Header contents={header} />
        <Intro contents={intro} />
        <Skills contents={skills} />
        {main.map((content, i) => <Main key={`${i}_content`} contents={content} />)}
        <Footer footer={footer} />
      </div>
    );
  }
}

export default Resume;
