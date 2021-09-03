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
        const images = this.props.images.map((image, index) => (<img onClick={() => this.imgChange(index)} src={image} alt='keyword'></img>))
        const image = this.props.images[this.state.index];

        return (
            <div className={styles.Modal} onClick={this.props.func}>
                <section onClick={(e) => e.stopPropagation()}>
                    <header>
                        {this.props.title}
                        <i class='fas fa-times' onClick={this.props.func}></i>
                    </header>
                    <div>
                        <div>
                            <i class='fas fa-chevron-left' onClick={() => this.imgChange(((this.state.index - 1) + 4) % 4)}></i>
                        </div>
                        <img src={image}></img>
                        <div>
                            <i class='fas fa-chevron-right' onClick={() => this.imgChange(((this.state.index - 1) + 4) % 4)}></i>
                        </div>
                    </div>
                    <footer>
                        {images}
                    </footer>
                </section>
            </div >
        );
    }
}

export default App;
