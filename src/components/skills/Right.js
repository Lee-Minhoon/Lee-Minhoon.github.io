import { Component } from 'react';
import styles from '../../styles.module.scss';
import skills from './skills.module.scss';

class App extends Component {
    render() {
        const content = this.props.content;
        const desc = content.desc.map((desc) => (<span className={skills.skill}><li>{desc}</li></span>))

        return (
            <div className={styles.Right}>
                {desc}
            </div>
        );
    }
}

export default App