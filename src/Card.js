import React from 'react';
import './index.css';

const Card = (props) => {
	const {name, date, title, description} = props;
	console.log(date);
	return (
		<div className = 'card tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div className = "flex justify-between">
				<h4> {name} </h4>
				<div className = "item">
					<h4>  {date} </h4>
				</div>
			</div>
			<div className = "recording-container">
			</div>
			<div className = "scrollable-imgs">
				<div className = "scrolling-wrapper">
					<div className = "photo"> <img src = {require("./img_avatar.png")} alt = "profile_img"/> </div>
					<div className = "photo"> <img src = {require("./img_avatar.png")} alt = "profile_img"/> </div>
					<div className = "photo"> <img src = {require("./img_avatar.png")} alt = "profile_img"/> </div>
					<div className = "photo"> <img src = {require("./img_avatar.png")} alt = "profile_img"/> </div>
					<div className = "photo"> <img src = {require("./img_avatar.png")} alt = "profile_img"/> </div>
				</div>
			</div>
			<div className = "description-text">
				<div className = "flex space-between">
					<h3> {title} </h3>
					<div className = "card-desc">
						<p> {description} </p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;