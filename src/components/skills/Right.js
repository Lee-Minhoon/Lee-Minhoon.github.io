import { Component } from 'react';
import styles from '../../styles.module.scss';
import skills from './skills.module.scss';

class Right extends Component {
    render() {
        const content = this.props.content;
        const desc = content.desc.map((desc, index) => <li key={index}>{desc}</li>);

        return (
            <div className={styles.Right}>
                <ul className={skills.desc}>{desc}</ul>
            </div>
        );
    }
}

export default Right;
