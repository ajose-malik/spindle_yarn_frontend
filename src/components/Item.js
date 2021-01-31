import React, { Component } from 'react';

class Item extends Component {
	state = {
		detail: false
	};

	detail = () => {
		this.setState({
			detail: true
		});
	};

	render = () => {
		const { detail } = this.state;
		return (
			<div>
				{detail ? (
					<div>
						<img src={this.props.item.image}></img>
						<h4>Name: {this.props.item.name}</h4>
						<h4>Name: {this.props.item.price}</h4>
						<h4>Name: {this.props.item.description}</h4>
					</div>
				) : (
					<div>
						<img src={this.props.item.image} onClick={this.detail}></img>
						<h4>Name: {this.props.item.name}</h4>
						<h4>Name: {this.props.item.price}</h4>
					</div>
				)}
			</div>
		);
	};
}

export default Item;
