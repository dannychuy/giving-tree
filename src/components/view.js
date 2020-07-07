import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Plant from './plant'
import AppleModal from './modal'
import '../styles/view.css';

class View extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			apples: [],
		};


		this.addApple = this.addApple.bind(this);
	}

	addApple(title, note) {
		console.log(title);
		console.log(note);
	}

	render() {
		return (
			<div className="container">
				<header>
					<h1>Whats going on with ya?</h1>
				</header>
				<Plant messages={["This is fun."]}/>
				<footer>
					<AppleModal
						addApple={this.addApple}
					/>
				</footer>
			</div>
		);
	}
}

export default View;
