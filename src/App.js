import React, { Component } from 'react';
import MenWear from './components/MenWear';

class App extends Component {
	// state = {
	// 	store: [],
	// 	cart: []
	// };

	render = () => {
		return (
			<div className='App'>
				<MenWear />
			</div>
		);
	};
}

export default App;
