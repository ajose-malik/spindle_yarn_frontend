import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Store from './Store';
import MenWear from './MenWear';
import WomenWear from './WomenWear';
import ThriftWear from './ThriftWear';
import '../store.css';

class Item extends Component {
	render = () => {
		return (
			<div className='App'>
				<div class='navbar-fixed'>
					<nav>
						<div className='nav-wrapper #9e9e9e blue-grey lighten-2'>
							<a href='/' class='brand-logo'>
								Spindle & Yarn
							</a>
							<ul className='right hide-on-med-and-down'>
								<li>
									<NavLink to='/'>Home</NavLink>
								</li>
								<li>
									<NavLink activeClassName='nav' to='/men'>
										Men
									</NavLink>
								</li>
								<li>
									<NavLink activeClassName='nav' to='/women'>
										Women
									</NavLink>
								</li>
								<li>
									<NavLink activeClassName='nav' to='/thrift'>
										Thrift
									</NavLink>
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
