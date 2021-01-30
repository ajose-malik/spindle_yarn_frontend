import React, { Component } from 'react';
import Item from './components/Item';
import axios from 'axios';

class WomenWear extends Component {
	state = {
		womenwear: []
	};

	getItems = () => {
		axios
			.get('/womenwear')
			.then(response => this.setState({ womenwear: response.data }))
			.catch(error => console.error(error));
	};

	componentDidMount = () => {
		this.getItems();
	};

	render = () => {
		return (
			<div>
				{this.state.womenwear.map(item => {
					return <Item item={item} />;
				})}
			</div>
		);
	};
}

export default WomenWear;
