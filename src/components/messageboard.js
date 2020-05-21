import React from "react"
import Plant from "../components/plant.js"
import { Collapse, Modal, Button } from "react-bootstrap"

import styles from "../components/messageboard.module.css"

class MessageBoard extends React.Component {
	constructor(props) {
		super();

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

		this.state = {"messages": this.state.messages, "open": false, "show": false};


	    this.enterPressed = this.enterPressed.bind(this);
	    this.createMessage = this.createMessage.bind(this);
	    this.handleClose = () => this.setState({"show":false});
	    this.handleShow = () => this.setState({"show":true});
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
			<div>
				<Button style={this.state.show ? {display:"none"} : {}} className={styles.board} onClick={this.handleShow}>Water The Tree</Button>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Feed the Tree :) </Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<input 
							type="text"
							placeholder="Today I will..."
							onKeyPress={this.enterPressed.bind(this)}
						/>

						<Collapse in={this.state.open}>
							<ul> {this.state.messages.map((message) => this.createMessage(message))} </ul>
						</Collapse>

					</Modal.Body>
					<Modal.Footer>
						<Button
							variant="secondary" 
							onClick={() => this.setState({ "open": !this.state.open })}
							aria-controls="example-collapse-text"
						>{this.state.open ? "Collapse" : "Expand"}</Button>
						<Button onClick={this.handleClose}>
							Close
						</Button>
					</Modal.Footer>

					<Plant></Plant>
				</Modal>
			</div>
	  	)
	}
}

export default MessageBoard


// https://www.glyphicons.com/ Glyphicons




