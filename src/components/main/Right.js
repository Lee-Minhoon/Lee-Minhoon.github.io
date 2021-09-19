import { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import styles from '../../styles.module.scss';

class Right extends Component {
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
        const images = content.images.map((image, index) => (<span className={styles.box}><img className={styles.Image} onClick={() => this.controlModal(index)} src={`projects/${content.folder}/${image}.png`} alt='keyword'></img></span>))
        const pdfs = content.pdfs.map((pdf) => <Link to={`/pdfviewer/${content.folder}/${pdf}`} target="_blank">PDF GO</Link>)

        return (
            <div className={styles.Right}>
                <h4>{content.title}</h4>
                <h5>{content.subtitle}</h5>
                <div>{desc}</div>
                <div>{keywords}</div>
                <div>{images}</div>
                <div>{pdfs}</div>
                {this.state.hasModal && (
                    <Modal title={content.title} folder={content.folder} images={content.images} index={this.state.index} close={this.controlModal}></Modal>
                )}
            </div>
        );
    }
}

export default Right;