import React from 'react';
import ReactDOM from 'react-dom';

import Card from './cards';

export default function List (props) {

	return(
		<div className="card-list">
			<div className="card-text">{props.cards[0]}<Card text={props.text}></Card></div>
			<div className="card-text">{props.cards[1]}<Card text={props.text}></Card></div>
			<div className="card-text">{props.cards[2]}<Card text={props.text}></Card>
			</div>
		</div>
	)
}