import styles from '../styles.module.scss';
import { Component } from 'react';

class App extends Component {
    render() {
        const summary = this.props.summary;

        return (
            <div className={styles.Summary}>
                <h1>summary</h1>
                <div className={styles.Row}>
                    <div className={styles.Left}>
                        <img src={summary.profile} alt='profile'></img>
                    </div>
                    <div className={styles.Right}>
                        {summary.intro}
                    </div>
                </div>
            </div >
        );
    }
}

export default App