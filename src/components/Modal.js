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
                        <img src={image} alt='keyword'></img>
                    </button>
                )
            }
            else {
                return (
                    <button onClick={() => this.imgChange(index)}>
                        <img src={image} alt='keyword'></img>
                    </button>
                )
            }
        });
        const image = this.props.images[this.state.index];
        const cnt = this.props.images.length;
        const arrow_left = '&lt';

        return (
            <div className={styles.Modal} onClick={this.props.func}>
                <section onClick={(e) => e.stopPropagation()}>
                    <header>
                        {this.props.title}
                        <i class='fas fa-times' onClick={this.props.func}></i>
                    </header>
                    <div>
                        <div className={styles.Arrow}>
                            <i class='fas fa-chevron-left' onClick={() => this.imgChange((this.state.index + cnt - 1) % cnt)}></i>
                        </div>
                        <div className={styles.View}>
                            <img src={image}></img>
                        </div>
                        <div className={styles.Arrow}>
                            <i class='fas fa-chevron-right' onClick={() => this.imgChange((this.state.index + 1) % cnt)}></i>
                        </div>
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
