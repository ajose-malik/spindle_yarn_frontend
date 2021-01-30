import React, { Component } from 'react';

class ItemThrift extends Component {
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
						<button value={this.props.item.id} onClick={this.deleteItem}>
							X
						</button>
						<div>
							<h2>Edit Item</h2>
							<form id={this.props.item.id} onSubmit={this.updateItem}>
								<label htmlFor='name'>Name</label>
								<input type='text' id='name' onChange={this.handleChange} />
								<br />
								<label htmlFor='price'>Price</label>
								<input type='text' id='price' onChange={this.handleChange} />
								<br />
								<label htmlFor='description'>Description</label>
								<input
									type='text'
									id='description'
									onChange={this.handleChange}
								/>
								<br />
								<label htmlFor='image'>Image URL</label>
								<input type='text' id='image' onChange={this.handleChange} />
								<br />
								<input type='submit' value='Update Item' />
							</form>
						</div>
						<div>
							<h2>New Item</h2>
							<form id={this.props.item.id} onSubmit={this.newItem}>
								<label htmlFor='name'>Name</label>
								<input type='text' id='name' onChange={this.handleChange} />
								<br />
								<label htmlFor='price'>Price</label>
								<input type='text' id='price' onChange={this.handleChange} />
								<br />
								<label htmlFor='description'>Description</label>
								<input
									type='text'
									id='description'
									onChange={this.handleChange}
								/>
								<br />
								<label htmlFor='image'>Image URL</label>
								<input type='text' id='image' onChange={this.handleChange} />
								<br />
								<input type='submit' value='Update Item' />
							</form>
						</div>
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

export default ItemThrift;
