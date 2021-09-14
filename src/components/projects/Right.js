import styles from '../../styles.module.scss';
import Modal from '../Modal';
import { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            index: null,
            isModal: false
        };
    }
    modalOn = (index) => {
        this.setState({
            index: index,
            isModal: !this.state.isModal
        });
    }

    render() {
        const content = this.props.content;
        const desc = content.desc.map((desc) => (<li>{desc}</li>))
        const keywords = content.keywords.map((keyword) => (<img className={styles.Keyword} src={keyword} alt='keyword'></img>))
        const images = content.images.map((image, index) => (<img className={styles.Image} onClick={() => this.modalOn(index)} src={`${content.folder}/${image}.png`} alt='keyword'></img>))
        console.log(images)

        return (
            <div className={styles.Right}>
                <h4>{content.title}</h4>
                <h5>{content.subtitle}</h5>
                {desc}
                <div>{keywords}</div>
                <div>{images}</div>
                {this.state.isModal && (
                    <Modal title={content.title} folder={content.folder} images={content.images} index={this.state.index} func={this.modalOn}></Modal>
                )}
            </div>
        );
    }
}

export default App