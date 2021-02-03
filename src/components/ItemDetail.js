import React, { Component } from 'react';

class ItemDetail extends Component {
	render = () => {
		return (
			<div className="container">
				<div className="row">
					<button onClick={() => this.props.showDetail('index')}>Index</button>
					<img className="col l6" src={this.props.item.image}></img>
					<h5>{this.props.item.name}</h5>
					<h5>{this.props.item.price}</h5>
					<h6>{this.props.item.description}</h6>
				</div>
			</div>
		);
	};
}

export default ItemDetail;
