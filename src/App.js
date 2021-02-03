import React, { Component } from 'react';
import Store from './components/Store';

class App extends Component {
	state = {
		cart: []
	};

	render = () => {
		return (
			<div className='App'>
				<header>
					<div className='logo-container'>
						<img
							src='spindle-and-yarn-logo.png'
							className='logo-image'
							alt='logo'
						/>
					</div>
				</header>
				<Store />
				<footer className='page-footer grey'>
					<div className='container'>
						<div className='row'>
							<div className='col l6 s12'>
								<h5 className='white-text'>About Us</h5>
								<p className='grey-text text-lighten-4'>
									We can write something about what Spindle & Yarn is.
								</p>
							</div>
							<div className='col l4 offset-l2 s12'>
								<h4 className='white-text'>Developers</h4>
								<ul>
									<li>
										<a
											className='grey-text text-lighten-3'
											href='https://github.com/ajose-malik'>
											Malik
										</a>
									</li>
									<li>
										<a
											className='grey-text text-lighten-3'
											href='https://github.com/noelm428'>
											Noel
										</a>
									</li>
									<li>
										<a
											className='grey-text text-lighten-3'
											href='https://github.com/ryanklintworth'>
											Ryan
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='footer-copyright'>
						<div className='container'>
							© 2021 Spindle & Yarn
							<a className='grey-text text-lighten-4 right' href='#!'>
								Shopping Cart
							</a>
						</div>
					</div>
				</footer>
			</div>
		);
	};
}

export default App;
