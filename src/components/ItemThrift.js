import React, { Component } from 'react';

class ItemThrift extends Component {
	render = () => {
		const { id } = this.props.item;
		return (
			<div className="row">
				<img
					className="col s12"
					onClick={() => this.props.showDetail('detail', id)}
					src={this.props.item.image}>
				</img>
				<h5>{this.props.item.name}</h5>
				<h6>{this.props.item.price}</h6>
			</div>
		);
	};
}

export default ItemThrift;
