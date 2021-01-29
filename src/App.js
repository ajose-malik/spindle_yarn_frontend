import React, { Component } from 'react';
import Item from './components/Item';
import axios from 'axios';

class App extends Component {
	render = () => {
		return (
			<div>
				<Item />
			</div>
		);
	};
}

export default App;
