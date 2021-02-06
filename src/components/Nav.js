import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Store from './Store';
import MenWear from './MenWear';
import WomenWear from './WomenWear';
import ThriftWear from './ThriftWear';

class Item extends Component {
	render = () => {
		return (
			<div className='App'>
				<div class='navbar-fixed'>
					<nav>
						<div class='nav-wrapper #9e9e9e blue-grey lighten-2'>
							<a href='/' class='brand-logo'>
								Spindle & Yarn
							</a>
							<ul class='right hide-on-med-and-down'>
								<li>
									<Link to='/'>Home</Link>
								</li>
								<li>
									<Link to='/men'>Men</Link>
								</li>
								<li>
									<Link to='/women'>Women</Link>
								</li>
								<li>
									<Link to='/thrift'>Thrift</Link>
								</li>
							</ul>
						</div>
					</nav>
					<Switch>
						<Route exact path='/' component={Store} />
						<Route exact path='/men' component={MenWear} />
						<Route exact path='/Women' component={WomenWear} />
						<Route exact path='/thrift' component={ThriftWear} />
					</Switch>
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
			</div>
		);
	};
}

export default Item;
