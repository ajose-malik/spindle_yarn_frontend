import React, { Component } from 'react';

class ItemDetail extends Component {
	render = () => {
		return (
			<div className="container">
				<div className="row">
					<button onClick={() => this.props.showDetail('index')}
					class="btn #9e9e9e blue-grey lighten-5 #9e9e9e blue-grey-text text-darken-2 waves-effect waves-light">BACK
						<i class="material-icons right">arrow_back</i>
					</button>
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
