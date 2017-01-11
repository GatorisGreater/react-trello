import React from 'react';
import ReactDOM from 'react-dom';

import List from './list';

export default function Board(props) {

return(
		<div className="board-title">{props.title} 
			<div className="lists-list"> <p> {props.lists[0]} </p>
				<List cards={props.cards} text={props.text}></List></div>
			<div className="lists-list"> <p> {props.lists[1]} </p>
				<List cards={props.cards} text={props.text}></List></div>
			<div className="lists-list"> <p> {props.lists[2]} </p>
				<List cards={props.cards} text={props.text}></List>
			</div>
		</div>	
)};