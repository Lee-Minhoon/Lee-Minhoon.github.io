import styles from '../App.module.scss';
import { Component } from 'react';

class App extends Component {
	render() {
		var list = [];
		var contents = this.props.contents;
		var i = 0
		while (i < contents.length) {
			list.push(
				<div>
					<h2>{contents[i].title}</h2>
					<h3>{contents[i].desc}</h3>
				</div>
			);
			i = i + 1;
		}

		return (
			<div className={styles.Box}>
				<h1>Contents</h1>
				{list}
			</div>
		);
	}
}

export default App