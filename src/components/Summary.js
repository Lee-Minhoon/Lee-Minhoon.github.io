import styles from '../styles.module.scss';
import { Component } from 'react';

class App extends Component {
    render() {
        var summary = this.props.summary;

        return (
            <div className={styles.Summary}>
                <h1>summary</h1>
                <img src={summary.profile} alt='profile'></img>
                {summary.intro}
            </div >
        );
    }
}

export default App