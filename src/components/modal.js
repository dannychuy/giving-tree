import React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';

import '../styles/modal.css';

// ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.51)';

export default class AppleModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			appleTitle: '',
			appleNote: '',
			addButtonActive: false,
			showNote: false,
			modalOpen: false,
		};
		
		this.handleModalOpen = this.handleModalOpen.bind(this);
		this.handleModalClose = this.handleModalClose.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.taskChange = this.taskChange.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.toggleNoteField = this.toggleNoteField.bind(this);
	}

	componentDidMount() {
	}


	handleModalOpen() {
		this.setState({ modalOpen: true })
	}

	handleModalClose() {
		this.setState({ modalOpen: false })
	}

	taskChange(e) {
		const appleTitle = e.target.value;
		this.setState({ appleTitle: appleTitle });
	}

	handleChange(e) {
		let nam = e.target.name;
		let val = e.target.value;
		let addButtonActive = this.state.addButtonActive;
		if (nam === 'appleTitle') {
			if (val !== '') {
				addButtonActive = true;
			}
		}
		this.setState({
			[nam]: val,
			addButtonActive
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const { addApple } = this.props;
		const { appleTitle, appleNote } = this.state;
		if (appleTitle !== '') {
			addApple(appleTitle, appleNote);
			this.setState({
				appleTitle: '',
				appleNote: '',
				showNote: false,
				addButtonActive: false
			});
		}
	}

	handleClose() {
		this.setState({
			appleTitle: '',
			appleNote: '',
			addButtonActive: false,
			showNote: false
		});
		this.handleModalClose();
	}


	toggleNoteField() {
		this.setState({
			showNote: !this.state.showNote
		});
	}

	render() {
		const { appleTitle, addButtonActive, showNote, appleNote } = this.state;
		return (
			
			
  			<Modal 
  				trigger={<Button fluid onClick={this.handleModalOpen}><Icon name="add" /> Add Apple</Button>}
				open={this.state.modalOpen}
				onClose={this.handleClose}
				centered={false}
				className="modal-outer-container"
			>
				<form onSubmit={this.handleSubmit}>
					<div className="modal-inner-container">
						<div className="modal-input-container task">
							<input
								name="appleTitle"
								placeholder="Something I'm positive..."
								value={appleTitle}
								onChange={this.handleChange}
								className="modal-todo-input"
								autoFocus
							/>
						</div>
						{showNote && (
							<div className="modal-input-container note">
								<textarea
									name="appleNote"
									placeholder="Tell us more!"
									value={appleNote}
									onChange={this.handleChange}
									className="modal-todo-input"
									autoFocus
								/>
							</div>
						)}
						<div className="modal-heading show-note" onClick={this.toggleNoteField}>
							{!showNote ? ('+ Add Notes'):('- Close Notes')}
						</div>
					</div>
					<div className="modal-footer">
						<Button
							primary
							floated="right"
							color="grey"
							disabled={!addButtonActive}
							onClick={this.handleSubmit}
						>
							Add
						</Button>
						<Button floated="right" onClick={this.handleClose}>
							Cancel
						</Button>
					</div>
				</form>
			</Modal>
		);
	}
}
