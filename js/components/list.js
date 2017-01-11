import React from 'react';
import ReactDOM from 'react-dom';

import Card from './cards';



export default function List (props) {
	console.log(props.cards);
	return(
		<div className="list-title">
			<div className="list-card">{props.cards[0]}</div>
			<div className="list-card">{props.cards[1]}</div>
			<div className="list-card">{props.cards[2]}
			</div>
		</div>
	)
}




// export default  function List  (props) {
// 	var props = {title:"Title of the card", cards:"Content of cards here", lists:['breakfast','lunch','dinner']};
// 	console.log(props);
// 	return(
// 		<div className="card-list">
// 		<div className="list-title">
// 		{props.title}
// 		<div className="list-lists">
// 		{props.lists[0]}
// 		<Card>{props.cards}</Card>
// 		</div>
// 		<div className="list-lists">
// 		{props.lists[1]}
// 		<Card>{props.cards}</Card>
// 		</div>
// 		<div className="list-lists">
// 		{props.lists[2]}
// 		<Card>{props.cards}</Card>
// 		</div>
// 		</div>
// 		</div>
// 		)
// };