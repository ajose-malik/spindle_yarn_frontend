import React, { Component } from 'react';
import Store2 from './components/Store2';

class App extends Component {
	state = {
		cart: []
	};

	render = () => {
		return (
			<div className='App'>
				<h1>Spindle & Yarn</h1>
				<Store2 />
			</div>
		);
	};
}

export default App;
