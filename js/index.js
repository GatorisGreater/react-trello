require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';

const lists = ['Breakfast','Lunch','Dinner'];
const cards = ["I'll eat that again", "I won't eat that again", "My dog wouldn't eat that"];
const text = "Food Name Here";

document.addEventListener('DOMContentLoaded', () => 
	ReactDOM.render(<Board title="3 Squares a Day" lists={lists} cards={cards} text={text} />, document.getElementById('app'))
);
