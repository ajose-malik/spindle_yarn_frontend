import React, { Component } from 'react';

class Store extends Component {
	render = () => {
		return (
			<div className="header">
				<div className="header-logo"></div>
				<div className="logo-image"></div>
				<div className="navbar">
				<ul className="nav-ul">
					<li><a href="#">SHOP SALE</a></li>
					<li><a href="#">WOMEN</a></li>
					<li><a href="#">MEN</a></li>
				</ul>
				</div>
			</div>

			<div className="main">
				<div className="product-content">
					<div className="mens-product-box">
					<a href="#">
						<img src="" alt="mens-clothing">
					</a>
					</div>
					<div className="womens-product-box">
					<a href="#">
						<img src="" alt="mens-clothing">
					</a>

					<a href="#">
						<img src="" alt="womens-clothing">
					</a>
					</div>
				</div>
			</div>

			<div className="footer">
			</div>
		)
	}
}

export default Store;
