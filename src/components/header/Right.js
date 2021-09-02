import styles from '../../styles.module.scss';
import { Component } from 'react';

class App extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Right}>
                <div className={styles.Contact}>
                    <a href={content.github}><i class="fab fa-github"></i></a>
                    <a href={content.github}><i class="fas fa-blog"></i></a>
                    <a href={content.github}><i class="fas fa-envelope"></i></a>
                </div>
            </div >
        );
    }
}

export default App