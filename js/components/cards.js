import React from 'react';
import ReactDOM from 'react-dom';

export default function Card(props) {

	return ( 
		<div className="card">
			<div className="card-text">{props.text}</div>
		</div>
	);
}