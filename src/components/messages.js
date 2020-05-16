import React, { useState }  from "react"
import styles from "./messageboard.module.css"


export default function Messages(props) {
	return (
		<ul key={props.messages}> {props.messages} </ul> 
  	)
}