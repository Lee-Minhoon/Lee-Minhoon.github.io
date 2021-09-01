import styles from '../../styles.module.scss';
import { Component } from 'react';

class App extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Right}>
                <p>{content.intro}</p>
            </div>
        );
    }
}

export default App