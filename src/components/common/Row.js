import styles from '../../styles.module.scss';
import Left from './Left'
import Right from './Right'
import { Component } from 'react';

class App extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Row}>
                <Left content={content}></Left>
                <Right content={content}></Right>
            </div>
        );
    }
}

export default App