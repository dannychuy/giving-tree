import React, {useState} from "react"
import { Navbar, Nav, Modal, Button } from "react-bootstrap"
import { Link } from 'gatsby'


export default function Navigation() {

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand to="/" as={Link}>Giving Tree</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Item as={Button} onClick={handleShow}>About</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Welcome to the Giving Tree</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					The purpose of this site is to give you spae to reflect on the
					positive things that have happened. Sometimes we spend too much
					time looking out for other people, we forget to include ourselves
					into that rotation. Here is a space to re-cultivate the awesome
					person you are.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}
