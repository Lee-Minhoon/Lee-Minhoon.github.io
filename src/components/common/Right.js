import styles from '../../styles.module.scss';
import { Component } from 'react';

class App extends Component {
    render() {
        const content = this.props.content;
        const desc = content.desc.map((desc) => (<li>{desc}</li>))

        return (
            <div className={styles.Right}>
                <h2>{content.title}</h2>
                <p>{content.subtitle}</p>
                {desc}
            </div>
        );
    }
}

export default App