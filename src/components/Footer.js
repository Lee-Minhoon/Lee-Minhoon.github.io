import { Component } from 'react';

class App extends Component {
	render() {
		const footer = this.props.footer;

		return (
			<div>
				{footer}
			</div>
		);
	}
}

export default App