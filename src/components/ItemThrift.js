import React, { Component } from 'react';

class ItemThrift extends Component {
	render = () => {
		const { id } = this.props.item;
		return (
			<div className="container">
				<div className="row">
					<img
						className="col s4"
						onClick={() => this.props.showDetail('detail', id)}
						src={this.props.item.image}></img>
					<h4>{this.props.item.name}</h4>
					<h4>{this.props.item.price}</h4>
				</div>
			</div>
		);
	};
}

export default ItemThrift;
