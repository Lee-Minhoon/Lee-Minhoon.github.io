import styles from '../../styles.module.scss';
import Wrapper from './Wrapper'
import { Component } from 'react';

class App extends Component {
    render() {
        const contents = this.props.contents;

        return (
            <div className={styles.Container}>
                <Wrapper content={contents}></Wrapper>
            </div>
        );
    }
}

export default App