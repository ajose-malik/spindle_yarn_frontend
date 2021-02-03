import React, { Component } from 'react';
import axios from 'axios';

class ItemThriftDetail extends Component {
	state = {};

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
				console.log('created');
			});
	};

	deleteItem = id => {
		axios
			.delete('https://spindlexyarn.herokuapp.com/products/' + id)
			.then(response => {
				// this.getItems();
				console.log('deleted');
			});
		// this.setState({
		// 	page: 'index'
		// });
	};

	updateItem = id => {
		// axios
		// .put('https://spindlexyarn.herokuapp.com/products/' + id, this.state)
		// .then(response => {
		// 	// this.props.getItems();
		// });
		console.log('updated');
		// this.setState({
		// 	page: 'detail',
		// 	productId: id
		// });
	};

	render = () => {
		const id = this.props.item.id;
		return (
			<div>
				<button onClick={() => this.props.showDetail('index')}>Index</button>
				<img src={this.props.item.image}></img>
				<h4>{this.props.item.name}</h4>
				<h4>{this.props.item.price}</h4>
				<h4>{this.props.item.description}</h4>
				<button onClick={this.deleteItem(id)}>X</button>
				<div>
					<h2>Edit Item</h2>
					<form onSubmit={this.updateItem(id)}>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							defaultValue={this.props.item.name}
							onChange={this.handleChange}
						/>
						<br />
						<label htmlFor='price'>Price</label>
						<input
							type='text'
							id='price'
							defaultValue={this.props.item.price}
							onChange={this.handleChange}
						/>
						<br />
						<label htmlFor='description'>Description</label>
						<input
							type='text'
							id='description'
							defaultValue={this.props.item.description}
							onChange={this.handleChange}
						/>
						<br />
						<label htmlFor='image'>Image URL</label>
						<input
							type='text'
							id='image'
							defaultValue={this.props.item.image}
							onChange={this.handleChange}
						/>
						<br />
						<label htmlFor='image'>Category</label>
						<input
							type='text'
							id='category'
							defaultValue={this.props.item.category}
							onChange={this.handleChange}
						/>
						<br />
						<input type='submit' value='Update Item' />
					</form>
				</div>
				{/* <div>
					<h2>New Item</h2>
					<form id={this.props.item.id} onSubmit={this.newItem}>
						<label htmlFor='name'>Name</label>
						<input type='text' id='name' onChange={this.handleChange} />
						<br />
						<label htmlFor='price'>Price</label>
						<input type='text' id='price' onChange={this.handleChange} />
						<br />
						<label htmlFor='description'>Description</label>
						<input type='text' id='description' onChange={this.handleChange} />
						<br />
						<label htmlFor='image'>Image URL</label>
						<input type='text' id='image' onChange={this.handleChange} />
						<br />
						<input type='submit' value='Create Item' />
					</form>
				</div> */}
			</div>
		);
	};
}

export default ItemThriftDetail;
