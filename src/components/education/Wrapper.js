import Row from './Row'
import { Component } from 'react';

class App extends Component {
    render() {
        const subject = this.props.contents.subject;
        const contents = this.props.contents.contents;
        const row = contents.map((content) => (<Row content={content}></Row>))

        return (
            <div>
                <h1>{subject}</h1>
                {row}
            </div>
        );
    }
}

export default App