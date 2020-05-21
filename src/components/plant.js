import React from "react"
import styled, { keyframes } from 'styled-components'

import styles from "../components/plant.module.css"

const bounceAnimation = keyframes`
	{
        0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.9)   translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-100px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-7px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }
    }
`;
 
const BouncyDiv = styled.div`
	position: absolute;
    height: 100px;
    width: 100px;
    border: 5px solid black;
    background: #D08707;
    margin: auto;
    animation: ${bounceAnimation} 3s infinite;
`;

class Plant extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<div className={styles.screen}>
				<div className={styles.center}>
					<BouncyDiv></BouncyDiv>
				</div>
			</div>
	  	)
	}
}

export default Plant
