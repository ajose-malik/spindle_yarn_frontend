import React, { Component } from 'react';
import Store from './components/ThriftWear';

class App extends Component {
	// state = {
	// 	store: [],
	// 	cart: []
	// };

	render = () => {
		return (
			<div clasName='App'>
				<ThriftWear />
			</div>
		);
	};
}

export default App;
