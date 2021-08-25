import { Component } from 'react';

class App extends Component {
	render() {
		var list = [];
		var skills = this.props.skills;
		var i = 0
		while (i < skills.length) {
			list.push(
				<h2>{skills[i].category}</h2>
			);
			var j = 0
			while (j < skills[i].techs.length) {
				list.push(
					<h3>{skills[i].techs[j]}</h3>
				);
				j = j + 1;
			}
			i = i + 1;
		}

		return (
			<div>
				<h1>Skills</h1>
				{list}
			</div>
		);
	}
}

export default App