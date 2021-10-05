import { Component } from 'react';
import styles from '../../styles.module.scss';
import header from './header.module.scss';

class Right extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Right}>
                <div className={header.contact}>
                    <a href={content.github}><i className="fab fa-github" /></a>
                    <a href={content.github}><i className="fas fa-blog" /></a>
                    <a href={content.github}><i className="fas fa-envelope" /></a>
                    <a href={content.github}><i className="fas fa-envelope" /></a>
                </div>
            </div >
        );
    }
}

export default Right;