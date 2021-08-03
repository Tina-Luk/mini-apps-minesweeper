import React from 'react';
import Square from './Square';
import bombCalc from './BombCalc';

class Board extends React.Component {
	constructor() {
		super();
		this.state = {
			board: [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			],
			bombed: false,
			winner: false,
			plays: 0,
		};
		this.squareClicked = this.squareClicked.bind(this);
		this.isDuplicate = this.isDuplicate.bind(this);
		this.checkWinner = this.checkWinner.bind(this);
	}
	componentDidMount() {
		let boardWithMimes = this.state.board.slice();
		let mimeCoordinates = [];
		for (let i = 0; i < 10; i++) {
			let [randX, randY] = [Math.round(Math.random() * 9), Math.round(Math.random() * 9)];
			let isDuplicate = this.isDuplicate(mimeCoordinates, randX, randY);
			if (isDuplicate) {
				i--;
			} else {
				mimeCoordinates.push([randX, randY]);
				boardWithMimes[randX][randY] = '*';
			}
		}
		this.setState({
			board: boardWithMimes,
		});
	}
	isDuplicate(coordinates, randomX, randomY) {
		for (let i = 0; i < coordinates.length; i++) {
			if (coordinates[i][0] === randomX && coordinates[i][1] === randomY) {
				return true;
			}
		}
		return false;
	}
	squareClicked(x, y) {
		if (!this.state.winner && !this.state.bombed) {
			let clickedMime = this.state.board[x][y] === '*';
			let boardCopy = this.state.board;
			if (clickedMime) {
				boardCopy[x][y] = '**';
				this.setState({
					board: boardCopy,
					bombed: true,
				});
			} else {
				boardCopy = bombCalc(boardCopy, x, y);
				let winner = this.checkWinner(boardCopy);
				this.setState({
					board: boardCopy,
					plays: this.state.plays + 1,
					winner: winner,
				});
			}
		}
		console.log(this.state.board);
	}
	checkWinner(board) {
		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board[0].length; j++) {
				if (board[i][j] === 0) {
					return false;
				}
			}
		}
		return true;
	}
	render() {
		return (
			<div className="App-board">
				{this.state.bombed ? <h1 className="lost">Game LOST</h1> : this.state.winner ? <h1 className="lost"> WINNER Found all Squares w/o BOMBS!</h1> : <h1>PLAYS: {this.state.plays}</h1>}
				{this.state.bombed ? (
					<img src="https://t3.ftcdn.net/jpg/00/42/53/70/360_F_42537001_JMwYOwBmDJ4pXlkMNRUZl8LkZ7TYoa9x.jpg" />
				) : (
					<table className="board">
						{this.state.board.map((row, x) => (
							<tr>
								{row.map((square, y) => (
									<Square square={square} x={x} y={y} clicked={this.squareClicked} />
								))}
							</tr>
						))}
					</table>
				)}
			</div>
		);
	}
}
export default Board;
