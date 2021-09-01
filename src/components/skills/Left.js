import styles from '../../styles.module.scss';
import { Component } from 'react';

class App extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Left}>
                <h4>{content.category}</h4>
            </div>
        );
    }
}

export default App