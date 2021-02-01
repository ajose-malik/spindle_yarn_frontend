import React, { Component } from 'react';
import Store2 from './components/Store2';

class App extends Component {
	state = {
		store: [],
		cart: []
	};

	render = () => {
		return (
			<div className='App'>
				<Store2 />
			</div>
		);
	};
}

export default App;
