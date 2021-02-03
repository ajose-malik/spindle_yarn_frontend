import React, { Component } from 'react';
import Store from './components/Store';

class App extends Component {
	state = {
		cart: []
	};

	render = () => {
		return (
			<div className='App'>
			<div class="navbar-fixed">
		    <nav>
		      <div class="nav-wrapper #9e9e9e blue-grey lighten-2">
		        <a href="#!" class="brand-logo">Spindle & Yarn</a>
		        <ul class="right hide-on-med-and-down">
		          <li><a href="sass.html" onClick={() => this.props.setPage('storefront')}>Home</a></li>
		          <li><a href="badges.html"onClick={() => this.props.setPage('men')}>Mens</a></li>
							<li><a href="badges.html">Womens</a></li>
							<li><a href="badges.html">Thrift</a></li>
		        </ul>
		      </div>
		    </nav>
		  </div>
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
				<footer className="page-footer grey">
					<div className="container">
						<div className="row">
							<div className="col l6 s12">
								<h5 className="white-text">About Us</h5>
								<p className="grey-text text-lighten-4">We are passionate about what fashion can do</p>
								<p classname="grey-text text-lighten-4">We are celebrating the creative minds behind the products</p>
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
					<div className="footer-copyright">
						<div className="container">
						© 2021 Spindle & Yarn
						</div>
					</div>
				</footer>
			</div>
		);
	};
}

export default App;
