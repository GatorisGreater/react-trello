import React from 'react';
import ReactDOM from 'react-dom';
var props = {text: 'Make food and eat it'};
console.log(props.text);
export default function Card(props) {
	var props = {text: 'Make food and eat it'};
	console.log(props.text);
	return ( <div className="card">
		<div className="card-text">{props.text}</div>
			</div>);

}