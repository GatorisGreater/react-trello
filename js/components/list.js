import React from 'react';
import ReactDOM from 'react-dom';
import Card from './cards';

var props = {title:"Title of the card", cards:"Content of cards here"};
export default  function List  (props) {

	return(
		<div className="card-list">
		<div className="list-title">
		{props.title}
		<Card>{props.cards}</Card>
		<Card>{props.cards}</Card>
		<Card>{props.cards}</Card>
		
		</div>
		</div>
		)
};