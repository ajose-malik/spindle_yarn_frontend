import React, { Component } from 'react';
import ItemThrift from './components/ItemThrift';
import axios from 'axios';

class ThriftWear extends Component {
	state = {
		thriftwear: []
	};

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		axios.post('/thriftwear', this.state).then(response => {
			this.getItems();
		});
	};

	deleteItem = event => {
		axios.delete('/thriftwear/' + event.target.value).then(response => {
			this.getItems();
		});
	};

	updateItem = event => {
		event.preventDefault();
		const id = event.target.id;
		axios.put('/thriftwear/' + id, this.state).then(response => {
			this.getItems();
		});
	};

	getItems = () => {
		axios
			.get('/thriftwear')
			.then(response => this.setState({ thriftwear: response.data }))
			.catch(error => console.error(error));
	};

	componentDidMount = () => {
		this.getItems();
	};

	render = () => {
		return (
			<div>
				{this.state.thriftwear.map(item => {
					return <ItemThrift item={item} />;
				})}
			</div>
		);
	};
}

export default ThriftWear;
