import styles from '../../styles.module.scss';
import { Component } from 'react';

class App extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Left}>
                <img src={content.profile} alt='profile'></img>
            </div>
        );
    }
}

export default App