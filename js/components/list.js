import React from 'react';
import ReactDOM from 'react-dom';

import Card from './cards';

export default function List (props) {

	return(
		<div className="card-list"> <ul>
			<div className="card-text"><li>{props.cards[0]}</li><Card text={props.text}></Card></div>
			<div className="card-text"><li>{props.cards[1]}</li><Card text={props.text}></Card></div>
			<div className="card-text"><li>{props.cards[2]}</li><Card text={props.text}></Card>
			</div>
		</ul></div>
	)
}