import React, { Component } from 'react';
// import MenWear from './components/MenWear';
import Store from './components/Store';

class App extends Component {
	state = {
		store: [],
		cart: []
	};

	render = () => {
		return (
			<div className='App'>
				<Store />
				{/*<MenWear />*/}
			</div>
		);
	};
}

export default App;
