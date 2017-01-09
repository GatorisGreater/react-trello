import React from 'react';
import ReactDOM from 'react-dom';

import List from './list';

export default function Board() {
	var props = { title:'Things to do', lists:['breakfast','lunch','Dinner']};
	console.log(props);
	return (
		<div className="list-board">
			<div className="board-title">
			 {props.title} 
				<List > {props.lists[0]} </List>
				<List > {props.lists[1]} </List>
				<List > {props.lists[2]} </List>
			</div>
		</div>
		)
};