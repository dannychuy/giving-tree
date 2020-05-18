import React  from "react"

import Messages from "../components/messages.js"
import styles from "./messageboard.module.css"

class MessageBoard extends React.Component {
	constructor(props) {
		super();
	    this.enterPressed = this.enterPressed.bind(this);
	    this.createMessage = this.createMessage.bind(this);

       	if (typeof window !== 'undefined') {
			if(localStorage.getItem("savedMessages")==null){
				localStorage.savedMessages = JSON.stringify(["Good", "Gooder"]);
			};
			this.state = {
		    	"messages": JSON.parse(localStorage.getItem("savedMessages"))
		    };
		} else {
			this.state = {
		    	"messages": ["Goodiest"]
		    };
		}

	    console.log(this.state.messages);
	}

	enterPressed(event) {
	    var code = event.keyCode || event.which;
	    if(code === 13 && event.target.value !== '') { //13 is the enter keycode
	        this.state.messages.unshift(event.target.value);
	    	this.setState({"messages": this.state.messages});
	   //  	if (typeof window !== 'undefined') {
				// localStorage.savedMessages = JSON.stringify(this.state.messages); 
	   //  	}
	    	event.target.value = '';
	    } 
	}

	createMessage(message) {
		return (
			<li>
				{message}
			</li>
		);
	}

	render() {
		return (
			<div className={styles.board}>
				<input 
					type="text"
					placeholder="Today I will..."
					onKeyPress={this.enterPressed.bind(this)}
				/>
				<Messages messages={this.state.messages.map((message) => this.createMessage(message))}/>
			</div>
	  	)
	}
}

export default MessageBoard




