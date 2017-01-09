import React from 'react';
import ReactDOM from 'react-dom';

import List from './list';

export default function Board() {
	return (
		<div className="list-board">
			<List />
			<List />
			<List />
		</div>
		)
};