import styles from '../../styles.module.scss';
import { Component } from 'react';

class App extends Component {
    render() {
        const content = this.props.content;
        const desc = content.desc.map((desc) => (<li>{desc}</li>))
        const keywords = content.keywords.map((keyword) => (<img className={styles.Keyword} src={keyword} alt='keyword'></img>))

        return (
            <div className={styles.Right}>
                <h4>{content.title}</h4>
                <h5>{content.subtitle}</h5>
                {desc}
                {keywords}
            </div>
        );
    }
}

export default App