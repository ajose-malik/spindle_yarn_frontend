import React, { Component } from 'react';
import Store from './components/Store';
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component {
	render = () => {
		return (
			<>
				<Nav />
				{/* <Store /> */}
				<Footer />
			</>
		);
	};
}

export default App;
