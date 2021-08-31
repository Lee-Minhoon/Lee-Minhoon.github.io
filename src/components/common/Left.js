import styles from '../../styles.module.scss';
import { Component } from 'react';

class App extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Left}>
                <h2>{content.period}</h2>
                <a href={content.link}>{content.link}</a>
            </div>
        );
    }
}

export default App