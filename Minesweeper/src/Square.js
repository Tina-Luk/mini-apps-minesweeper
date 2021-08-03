import React from 'react';

class Square extends React.Component {
	constructor() {
		super();
	}
	render() {
		let squareClass = this.props.square < 0 ? 'no-bombs' : this.props.square >= 1 ? 'adj-bombs' : 'not-clicked';
		return (
			<td onClick={() => this.props.clicked(this.props.x, this.props.y)} className={squareClass}>
				{this.props.square === 0 || this.props.square === '*' || this.props.square <= -1 ? '' : this.props.square}
			</td>
		);
	}
}
export default Square;
