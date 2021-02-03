import React, { Component } from 'react';
import axios from 'axios';

class ItemThriftDetail extends Component {
	state = {
		image: this.props.item.image,
		name: this.props.item.name,
		price: this.props.item.price,
		description: this.props.item.description,
		category: this.props.item.category
	};

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	newItem = () => {
		axios
			.post('https://spindlexyarn.herokuapp.com/products', {
				...this.state
			})
			.then(response => {
				this.props.getItems();
			});
		this.props.showDetail('index');
	};

	deleteItem = () => {
		const { id } = this.props.item;
		axios
			.delete('https://spindlexyarn.herokuapp.com/products/' + id)
			.then(response => {
				this.props.getItems();
			});
		this.props.showDetail('index');
	};

	updateItem = () => {
		const { id } = this.props.item;
		axios
			.put('https://spindlexyarn.herokuapp.com/products/' + id, {
				...this.state
			})
			.then(response => {
				this.props.getItems();
			});
		this.props.showDetail('index');
	};

	render = () => {
		return (
			<div className="container">
				<div className="row">
				<button onClick={() => this.props.showDetail('index')}
				class="btn #9e9e9e blue-grey lighten-5 #9e9e9e blue-grey-text text-darken-2 waves-effect waves-light">BACK
					<i class="material-icons right">arrow_back</i>
				</button>
				<img className="col s8" src={this.props.item.image}></img>
				<h5>{this.props.item.name}</h5>
				<h5>{this.props.item.price}</h5>
				<div class="divider"></div>
				<h6>{this.props.item.description}</h6>
				<div class="divider"></div>
				<div class="section">
				<button onClick={this.deleteItem} class="btn disabled #9e9e9e blue-grey lighten-5 #9e9e9e blue-grey-text text-darken-2 waves-effect waves-light">DELETE
					<i class="material-icons right">close</i></button>
				</div>
				<details>
					<summary>Update Item</summary>
					<form onSubmit={this.updateItem}>
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
						<div class="btn blue-grey lighten-5">
						<span></span>
						<input type='submit' value='Update Item' />
						</div>
					</form>
				</details>

				<details>
					<summary>Add Items</summary>
					<form onSubmit={this.newItem}>
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
						<label htmlFor='image'>Category</label>
						<input type='text' id='category' onChange={this.handleChange} />
						<br />
						<div class="btn blue-grey lighten-5">
						<span></span>
						<input type='submit' value='Add Item' />
						</div>
					</form>
				</details>
			</div>
			</div>
		);
	};
}

export default ItemThriftDetail;
