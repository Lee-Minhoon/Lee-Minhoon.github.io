import { Component } from 'react';

class Footer extends Component {
	render() {
		const footer = this.props.footer;

		return (
			<div>
				{footer}
			</div>
		);
	}
}

export default Footer;