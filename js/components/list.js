import React from 'react';
import ReactDOM from 'react-dom';
import Card from './cards';


export default  function List  () {
	var props = {title:"Title of the card", cards:"Content of cards here", lists:['breakfast','lunch','dinner']};
	console.log(props);
	return(
		<div className="card-list">
		<div className="list-title">
		{props.title}
		<div className="list-lists">
		{props.lists[0]}
		<Card>{props.cards}</Card>
		</div>
		<div className="list-lists">
		{props.lists[1]}
		<Card>{props.cards}</Card>
		</div>
		<div className="list-lists">
		{props.lists[2]}
		<Card>{props.cards}</Card>
		</div>
		</div>
		</div>
		)
};