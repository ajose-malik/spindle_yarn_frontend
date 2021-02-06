import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component {
	render = () => {
		return (
			<>
				<Nav />
				<Footer />
			</>
		);
	};
}

export default App;
