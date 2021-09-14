import styles from '../styles.module.scss';
import { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index
        };
    }
    imgChange = (index) => {
        this.setState({
            index: index
        });
    }

    render() {
        const images = this.props.images.map((image, index) => {
            if (this.state.index === index) {
                return (
                    <button className={styles.Now} onClick={() => this.imgChange(index)}>
                        <img src={`${this.props.folder}/${image}.png`} alt='keyword'></img>
                    </button>
                )
            }
            else {
                return (
                    <button onClick={() => this.imgChange(index)}>
                        <img src={`${this.props.folder}/${image}.png`} alt='keyword'></img>
                    </button>
                )
            }
        });
        const image = this.props.images[this.state.index];
        const cnt = this.props.images.length;

        return (
            <div className={styles.Modal} onClick={this.props.func}>
                <section onClick={(e) => e.stopPropagation()}>
                    <header>
                        {this.props.title}
                        <i class='fas fa-times' onClick={this.props.func}></i>
                    </header>
                    <div>
                        <svg style={{ left: '1%' }} viewBox="0 0 12 18" onClick={() => this.imgChange((this.state.index + cnt - 1) % cnt)}>
                            <polyline points="9 3 3 9 9 15"></polyline>
                        </svg>
                        <img src={`${this.props.folder}/${image}.png`}></img>
                        <svg style={{ right: '1%' }} viewBox="0 0 12 18" onClick={() => this.imgChange((this.state.index + 1) % cnt)}>
                            <polyline points="3 3 9 9 3 15"></polyline>
                        </svg>
                    </div>
                    <footer>
                        {images}
                    </footer>
                </section >
            </div >
        );
    }
}

export default App;
