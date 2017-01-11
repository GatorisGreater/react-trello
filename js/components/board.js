import React from 'react';
import ReactDOM from 'react-dom';

import List from './list';

// const cards = ["I'll eat that again", "I wouldn't eat that again", "My dog wouldn't eat that"];

export default function Board(props) {
	// const lists = props.lists.map(list =>
	// 	<List title={props.lists[0]}
	// 		  cards={cards} />

	// );
	let cardTitles = props.cards;
	console.log(props.cards);

return(
		<div className="board-title">{props.title} 
			<div className="board-list">{props.lists[0]}
				<div className="board-card" cards={props.cards}></div>
			</div>
			<div className="board-list">{props.lists[1]}
				<div className="board-card" cards={props.cards}></div>
			</div>
			<div className="board-list">{props.lists[2]}
				<div className="board-card" cards={props.cards}></div>
			</div>
		</div>	
)};



//
// export default function Board(props) {
// 	var props = { title:'Things to do', lists:['breakfast','lunch','Dinner']};
// 	console.log(props);
	


// 	return (
// 		<div className="list-board">
// 			<div className="board-title">
// 			 {props.title} 

// 			 //Pass title and card property to each List element using the map method.
// 				<List title="blah"> {props.list[0]} </List>
// 				<List > {props.lists[1]} </List>
// 				<List > {props.lists[2]} </List>
// 			</div>
// 		</div>
// 		)
// };