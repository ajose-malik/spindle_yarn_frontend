import React, { Component } from 'react';

class ItemDetail extends Component {
	render = () => {
		return (
			<div>
				<button onClick={() => this.props.showDetail('index')}>Index</button>
				<img src={this.props.item.image}></img>
				<h4>{this.props.item.name}</h4>
				<h4>{this.props.item.price}</h4>
				<h4>{this.props.item.description}</h4>
			</div>
		);
	};
}

export default ItemDetail;
