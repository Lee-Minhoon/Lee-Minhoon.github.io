import { Component } from 'react';
import modal from './modal.module.scss';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index
        };
    }

    imageChange = (index) => {
        this.setState({
            index: index
        });
    }

    render() {
        const thumbnails = this.props.images.map((image, index) => {
            if (this.state.index === index) {
                var current = modal.current;
            }
            return (
                <img className={current} onClick={() => this.imageChange(index)} src={`projects/${this.props.folder}/${image}`} alt='thumbnail'></img>
            )
        });
        const currentImage = this.props.images[this.state.index];
        const length = this.props.images.length;

        return (
            <div className={modal.Modal} onClick={() => this.props.close(null)}>
                <section onClick={(e) => e.stopPropagation()}>
                    <header>
                        <div>{this.props.title}</div>
                        <svg viewBox="0 0 12 12" onClick={() => this.props.close(null)}>
                            <polyline points="3 3 6 6 9 3 6 6 9 9 6 6 3 9 6 6"></polyline>
                        </svg>
                    </header>
                    <div className={modal.viewer}>
                        <svg style={{ left: '1%' }} viewBox="0 0 12 18" onClick={() => this.imageChange((this.state.index + length - 1) % length)}>
                            <polyline points="9 3 3 9 9 15"></polyline>
                        </svg>
                        <img src={`projects/${this.props.folder}/${currentImage}`}></img>
                        <svg style={{ right: '1%' }} viewBox="0 0 12 18" onClick={() => this.imageChange((this.state.index + 1) % length)}>
                            <polyline points="3 3 9 9 3 15"></polyline>
                        </svg>
                    </div>
                    <footer>
                        {thumbnails}
                    </footer>
                </section>
            </ div >
        );
    }
}

export default Modal;
