import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import MessageBoard from "../components/messageboard.js"
import Navigation from "../components/nav.js"


export default function Home() {
	return (
		<div>
			<Navigation />
			<MessageBoard />
		</div>
	)
}