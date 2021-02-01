import React, { Component } from 'react';
import ItemThrift from './ItemThrift';
import axios from 'axios';

class ThriftWear extends Component {
	state = {
		name: '',
		products: []
	};

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	newItem = event => {
		event.preventDefault();
		axios
			.post('https://spindlexyarn.herokuapp.com/products', this.state)
			.then(response => {
				this.getItems();
			});
	};

	deleteItem = event => {
		axios
			.delete(
				'https://spindlexyarn.herokuapp.com/products/' + event.target.value
			)
			.then(response => {
				this.getItems();
			});
	};

	updateItem = event => {
		event.preventDefault();
		const id = event.target.id;
		axios
			.put('https://spindlexyarn.herokuapp.com/products/' + id, this.state)
			.then(response => {
				this.getItems();
			});
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
					if (item.category === 'thrift') {
						return <ItemThrift item={item} />;
					}
				})}
			</div>
		);
	};
}

export default ThriftWear;
