import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../store.css';

class Store extends Component {
	render = () => {
		return (
			<div className='row'>
				<NavLink to='/men'>
					<img
						className='col s12 m4'
						src='https://images.pexels.com/photos/3193731/pexels-photo-3193731.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
						alt='mens'
					/>
				</NavLink>

				<NavLink to='/women'>
					<img
						className='col s12 m4'
						src='https://images.pexels.com/photos/1075776/pexels-photo-1075776.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
						alt='womens'
					/>
				</NavLink>

				<NavLink to='/thrift'>
					<img
						className='col s12 m4'
						src='https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
						alt='thrift'
					/>
				</NavLink>
			</div>
		);
	};
}

export default Store;
