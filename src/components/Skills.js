import styles from '../styles.module.scss';
import { Component } from 'react';

class App extends Component {
	render() {
		var skills = this.props.skills;
		var tags = [];
		var i = 0
		while (i < skills.length) {
			var temp = [];
			var j = 0
			while (j < skills[i].techs.length) {
				temp.push(
					<p>{skills[i].techs[j]}</p>
				);
				j = j + 1;
			}
			tags.push(
				<div className={styles.Row}>
					<div className={styles.Intro}>
						<h2>{skills[i].category}</h2>
					</div>
					<div className={styles.Description}>
						{temp}
					</div>
				</div>
			);
			i = i + 1;
		}

		return (
			<div className={styles.Skills}>
				<h1>Skills</h1>
				{tags}
			</div>
		);
	}
}

export default App