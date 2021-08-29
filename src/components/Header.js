import { Component } from 'react';

class App extends Component {
	render() {
		var header = this.props.header;
		return (
			<div>
				{header.name}
				<a href='mailto:{header.email}'>{header.email}</a>
				<a href={header.github}>{header.github}</a>
				<a href={header.blog}>{header.blog}</a>
			</div>
		);
	}
}

export default App