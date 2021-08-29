import styles from '../styles.module.scss';
import { Component } from 'react';

class App extends Component {
    render() {
        var subject = this.props.contents.subject
        var contents = this.props.contents.contents;
        var tags = [];
        var i = 0
        while (i < contents.length) {
            var temp = [];
            var j = 0
            while (j < contents[i].desc.length) {
                temp.push(
                    <p>{contents[i].desc[j]}</p>
                );
                j = j + 1;
            }
            tags.push(
                <div className={styles.Row}>
                    <div className={styles.Intro}>
                        <h2>{contents[i].period}</h2>
                        <a href={contents[i].link}>{contents[i].link}</a>
                    </div>
                    <div className={styles.Description}>
                        <h2>{contents[i].title}</h2>
                        {temp}
                    </div>
                </div>
            );
            i = i + 1;
        }

        return (
            <div>
                <h1>{subject}</h1>
                {tags}
            </div>
        );
    }
}

export default App