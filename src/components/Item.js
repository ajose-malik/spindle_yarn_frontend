import React, { Component } from 'react';

class Item extends Component {
	render = () => {
		const { id } = this.props.item;
		return (
			<div className="container">
				<div className="row">
				<img
					className="col s6"
					onClick={() => this.props.showDetail('detail', id)}
					src={this.props.item.image}>
				</img>
				<h5>{this.props.item.name}</h5>
				<h6>{this.props.item.price}</h6>
			</div>
		</div>
		);
	};
}

export default Item;
