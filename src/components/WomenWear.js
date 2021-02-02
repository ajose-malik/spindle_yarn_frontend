import React, { Component } from 'react';
import Item from './Item';
import ItemDetail from './ItemDetail';
import axios from 'axios';

class WomenWear extends Component {
	state = {
		products: [],
		page: 'index',
		productId: null
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

	showDetail = (goto, id = null) => {
		if (goto === 'index') {
			this.setState({
				page: 'index',
				productId: id
			});
		} else if (goto === 'detail') {
			this.setState({
				page: 'detail',
				productId: id
			});
		}
	};

	render = () => {
		const { page } = this.state;
		if (page === 'index') {
			return (
				<div>
					<button onClick={() => this.props.setPage('storefront')}>Back</button>
					{this.state.products.map(item => {
						if (item.category === 'women') {
							return <Item item={item} showDetail={this.showDetail} />;
						}
					})}
				</div>
			);
		} else if (page === 'detail') {
			return (
				<div>
					{this.state.products.map(item => {
						if (item.id === this.state.productId) {
							return <ItemDetail item={item} showDetail={this.showDetail} />;
						}
					})}
				</div>
			);
		}
	};
}

export default WomenWear;
