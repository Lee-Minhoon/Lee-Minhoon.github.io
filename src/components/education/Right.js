import styles from '../../styles.module.scss';
import { Component } from 'react';

class App extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Right}>
                <h2>{content.title}</h2>
                <li>{content.desc}</li>
            </div>
        );
    }
}

export default App