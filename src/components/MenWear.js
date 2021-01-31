import React, { Component } from 'react';
import Item from './Item';
import axios from 'axios';

class MenWear extends Component {
	state = {
		menwear: []
	};

	getItems = () => {
		axios
			.get('https://git.heroku.com/spindlexyarn/menwear')
			.then(response => this.setState({ menwear: response.data }))
			.catch(error => console.error(error));
	};

	componentDidMount = () => {
		this.getItems();
	};

	render = () => {
		return (
			<div>
				{this.state.menwear.map(item => {
					return <Item item={item} />;
				})}
			</div>
		);
	};
}

export default MenWear;
