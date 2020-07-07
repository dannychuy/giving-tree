import React from "react"
import { Popup } from "semantic-ui-react"

import Tree from "../../static/tree.svg"
import Apple from "../../static/apple.svg"

class View extends React.Component {
	constructor(props) {
		super();
		this.messages = props.messages;
	}

	render() {
		return (
			<div>
				<Tree />
			</div>
	  	)
	}
}

export default View


// https://www.glyphicons.com/ Glyphicons

// {this.state.messages.length > 0 &&
// 						<OverlayTrigger trigger="hover" placement="top" overlay={
// 							<Popover className={styles.popover} id="popover-basic">
// 								<Popover.Content>
// 									{this.state.messages[0]}
// 								</Popover.Content>
// 							</Popover>
// 						}>
// 							<Apple className={styles.apple0}/>
// 						</OverlayTrigger>
// 					}


