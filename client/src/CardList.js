import React from 'react';
import Card from './Card';

const CardList = ({ users }) => {
	const cardArray = users.map((user,i) => {
		return (<Card
		key = {i} 
		id = {users[i].id} 
		name  = {users[i].name}
		date = {users[i].date}
		title = {users[i].title}
		description = {users[i].description}
		/>
	)})
	return (
		<div>
			{cardArray}
		</div>
	);
}

// const CardList = ({props}) => {
// 	const {key, id, name, date, title, description, imgPath} = props;
// 	console.log(key);
// 	console.log(name);
// 	console.log(title);
// 	console.log(imgPath);
// }

export default CardList;