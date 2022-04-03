import { Component } from 'react';
import styles from '../../styles.module.scss';
import skills from './skills.module.scss';

class Right extends Component {
    render() {
        const content = this.props.content;
        const names = content.names.map((name, index) => <li key={index}>{name}</li>);

        return (
            <div className={styles.Right}>
                <span>{content.desc}</span>
                <ul className={skills.names}>{names}</ul>
            </div>
        );
    }
}

export default Right;
