import React, { Component } from 'react';
import Item from './Item';
import axios from 'axios';

class WomenWear extends Component {
	state = {
		products: []
	};

	getItems = () => {
		axios
			.get('https://spindlexyarn.herokuapp.com/products')
			.then(response => this.setState({ products: response.data }))
			.catch(error => console.error(error));
	};

	componentDidMount = () => {
		this.getItems();
	};

	render = () => {
		return (
			<div>
				<button onClick={() => this.props.setPage('storefront')}>Back</button>
				{this.state.products.map(item => {
					if (item.category === 'women') {
						return <Item item={item} />;
					}
				})}
			</div>
		);
	};
}

export default WomenWear;
