import styles from '../../styles.module.scss';
import Subject from '../Subject';
import Wrapper from './Wrapper'
import { Component } from 'react';

class App extends Component {
    render() {
        const contents = this.props.contents;

        return (
            <div className={styles.Container}>
                <Subject subject={contents.subject}></Subject>
                <Wrapper content={contents}></Wrapper>
            </div>
        );
    }
}

export default App