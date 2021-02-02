import React, { Component } from 'react';

class Item extends Component {
	render = () => {
		const { id } = this.props.item;
		return (
			<div>
				<img
					onClick={() => this.props.showDetail('detail', id)}
					src={this.props.item.image}></img>
				<h4>{this.props.item.name}</h4>
				<h4>{this.props.item.price}</h4>
			</div>
		);
	};
}

export default Item;
