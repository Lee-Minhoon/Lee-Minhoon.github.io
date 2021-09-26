import { Component } from 'react';
import styles from '../../styles.module.scss';
import intro from './intro.module.scss';

class Left extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Left}>
                <img className={intro.Profile} src={content.profile} alt='profile'></img>
            </div>
        );
    }
}

export default Left;