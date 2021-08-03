import React from 'react';
import './App.css';
import Board from './Board';

function App() {
	return (
		<div className="App">
			<header>
				<h1>Minesweeper</h1>
			</header>
			<p> Find all squares without bombs</p>
			<Board />
		</div>
	);
}

export default App;
