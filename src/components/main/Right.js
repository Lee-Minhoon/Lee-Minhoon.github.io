import styles from '../../styles.module.scss';
import Modal from '../Modal';
import { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            index: null,
            hasModal: false
        };
    }
    controlModal = (index) => {
        this.setState({
            index: index,
            hasModal: !this.state.hasModal
        });
    }

    render() {
        const content = this.props.content;
        const desc = content.desc.map((desc) => (<li>{desc}</li>))
        const keywords = content.keywords.map((keyword) => (<img className={styles.Keyword} src={keyword} alt='keyword'></img>))
        const images = content.images.map((image, index) => (<img className={styles.Image} onClick={() => this.controlModal(index)} src={`${content.folder}/${image}.png`} alt='keyword'></img>))

        return (
            <div className={styles.Right}>
                <h4>{content.title}</h4>
                <h5>{content.subtitle}</h5>
                <div>{desc}</div>
                <div>{keywords}</div>
                <div>{images}</div>
                {this.state.hasModal && (
                    <Modal title={content.title} folder={content.folder} images={content.images} index={this.state.index} close={this.controlModal}></Modal>
                )}
            </div>
        );
    }
}

export default App