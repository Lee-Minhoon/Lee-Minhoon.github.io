import styles from '../../styles.module.scss';
import Subject from '../Subject';
import Wrapper from './Wrapper'
import { Component } from 'react';

class App extends Component {
    render() {
        const subject = this.props.contents.subject;
        const contents = this.props.contents.contents;
        const wrapper = contents.map((content) => (<Wrapper content={content}></Wrapper>))

        return (
            <div className={styles.Container}>
                <Subject subject={subject}></Subject>
                {wrapper}
            </div>
        );
    }
}

export default App