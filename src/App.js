import React, { Component } from 'react';
import Store from './components/Store';

class App extends Component {
	state = {
		store: [],
		cart: []
	};

	render = () => {
		return (
			<div clasName='App'>
				<Store store={store} />
			</div>
		);
	};
}

export default App;
