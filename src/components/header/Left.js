import styles from '../../styles.module.scss';
import { Component } from 'react';

class App extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Left}>
                <h1>{content.name}</h1>
                <h2>{content.desc}</h2>
            </div>
        );
    }
}

export default App