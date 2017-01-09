import React from 'react';
import ReactDOM from 'react-dom';

import List from './list';

var props = { title:'Things to do', lists:['breakfast','lunch','Dinner']};
export default function Board(props) {
	return (
		<div className="list-board">
			<div className="board-title">
			 {props.title} 
				<List > {props.lists} </List>
				<List > {props.lists} </List>
				<List > {props.lists} </List>
			</div>
		</div>
		)
};