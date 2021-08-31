import styles from '../../styles.module.scss';
import { Component } from 'react';

class App extends Component {
    render() {
        const content = this.props.content;
        const tech = content.techs.map((tech) => (<p>{tech}</p>))

        return (
            <div className={styles.Right}>
                {tech}
            </div>
        );
    }
}

export default App