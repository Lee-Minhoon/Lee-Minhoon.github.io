import styles from '../styles.module.scss';
import { Component } from 'react';

class App extends Component {
    render() {
        const subject = this.props.subject;

        return (
            <div className={styles.Subject}>
                <h3>{subject}</h3>
            </div>
        );
    }
}

export default App