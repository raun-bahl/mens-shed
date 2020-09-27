import React from 'react';
import './index.css';
import { users } from './users';
import Mic from './Mic.js';


const Card = (props) => {
	const {name, date, title, description} = props;
	return (
		<div className = 'tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div className = "flex justify-between">
				<h4> {name} </h4>
				<div className = "item">
					<h4>  {date} </h4>
				</div>
			</div>
			<div className = "recording-container">
				<Mic />
			</div>
			<div className = "scrollable-imgs">
			
				<div className = "scrolling-wrapper">
					<div className = "photo"> <img src = {require("./1.jpeg")} alt = "profile_img"/> </div>
					<div className = "photo"> <img src = {require("./1.jpeg")} alt = "profile_img"/> </div>
					<div className = "photo"> <img src = {require("./1.jpeg")} alt = "profile_img"/> </div>
					<div className = "photo"> <img src = {require("./1.jpeg")} alt = "profile_img"/> </div>

				</div> 
			
			</div>
			<div className = "description-text">
				<div className = "flex justify-between">
					<div className = "flex flex-column justify-center">
						<h3> {title} </h3>
					</div>
					<div className = "card-desc">
						<p className = "tl f6 lh-copy measure-narrow"> {description} </p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;