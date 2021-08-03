const bombCalc = (board, x, y) => {
	let upper = x === 0 ? 0 : x - 1;
	let lower = x === 9 ? 9 : x + 1;
	let left = y === 0 ? 0 : y - 1;
	let right = y === 9 ? 9 : y + 1;
	let miniRows = board.slice(upper, lower + 1);
	let mini = [];
	for (let i = 0; i < miniRows.length; i++) {
		mini.push(miniRows[i].slice(left, right + 1));
	}
	let bombs = countAdjBombs(mini);
	if (bombs > 0) {
		board[x][y] = bombs;
		return board;
	} else {
		let adjCoord = [];
		for (let i = upper; i <= lower; i++) {
			for (let j = left; j <= right; j++) {
				if (board[i][j] === 0) {
					board[i][j] = -1;
				}
				if (i !== x || j !== y) {
					adjCoord.push([i, j]);
				}
			}
		}
		board[x][y] += -1;
		for (let i = 0; i < adjCoord.length; i++) {
			if (board[adjCoord[i][0]][adjCoord[i][1]] === -1) {
				bombCalc(board, adjCoord[i][0], adjCoord[i][1]);
			}
		}
	}
	return board;
};
const countAdjBombs = (miniBoard) => {
	let bombs = 0;
	for (let i = 0; i < miniBoard.length; i++) {
		for (let j = 0; j < miniBoard[i].length; j++) {
			if (miniBoard[i][j] === '*') {
				bombs += 1;
			}
		}
	}
	return bombs;
};

export default bombCalc;
