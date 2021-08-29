import styles from '../styles.module.scss';
import { Component } from 'react';

class App extends Component {
    render() {
        var education = this.props.education;
        var tags = [];
        var i = 0
        while (i < education.length) {
            tags.push(
                <div className={styles.Row}>
                    <div className={styles.Intro}>
                        <h2>{education[i].period}</h2>
                    </div>
                    <div className={styles.Description}>
                        <h2>{education[i].title}</h2>
                        <p>{education[i].desc}</p>
                    </div>
                </div>
            );
            i = i + 1;
        }

        return (
            <div className={styles.Education}>
                <h1>Education</h1>
                {tags}
            </div>
        );
    }
}

export default App