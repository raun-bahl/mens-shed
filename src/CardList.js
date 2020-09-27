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

export default CardList;