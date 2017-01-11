require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

// import Card from './components/cards';
// import List from './components/list';
import Board from './components/board';

const lists = ['Breakfast','Lunch','Dinner'];
const cards = ["I'll eat that again", "I won't eat that again", "My dog wouldn't eat that"];
const text = "Your Food Here";

document.addEventListener('DOMContentLoaded', () => 
	ReactDOM.render(<Board title="Secret Project" lists={lists} cards={cards} text={text} />, document.getElementById('app'))
);

// let props = {
// 	title: 'Secret Project'
// }

// props.title
