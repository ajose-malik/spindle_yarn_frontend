import React, { Component } from 'react';
import MenWear from './MenWear';
import WomenWear from './WomenWear';
import ThriftWear from './ThriftWear';
import '../store.css'

class Store extends Component {

	state = {
		page: 'storefront'
	};

	setPage = goto => {
		if (goto === 'storefront') {
			this.setState({
				page: 'storefront'
			});
		} else if (goto === 'men') {
			this.setState({
				page: 'menwear'
			});
		} else if (goto === 'women') {
			this.setState({
				page: 'womenwear'
			});
		} else if (goto === 'thrift') {
			this.setState({
				page: 'thriftwear'
			});
		}
	};

	render = () => {
		const { page } = this.state;
		if (page === 'storefront') {
			return (
				<div>
					<div className="container">
						<div className="content-box">
						
							<div className="mens">
								<div className="shop-box-men">
								<button onClick={() => this.setPage('men')}>
									<span className="line-1">SHOP</span>
									<br/><br/>
									<span className="line-2">MENS</span>
									<span className="line-3"></span>
								</button>
									<img src="https://images.pexels.com/photos/3193731/pexels-photo-3193731.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="store-image" alt="mens"/>
								</div>
							</div>

							<div className="womens">
								<div className="shop-box-women">
								<button onClick={() => this.setPage('women')}>
									<span className="line-1">SHOP</span>
									<br/><br/>
									<span className="line-2">WOMENS</span>
									<span className="line-3"></span>
								</button>
									<img src="https://images.pexels.com/photos/1075776/pexels-photo-1075776.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="store-image" alt="womens"/>
								</div>
							</div>

							<div className="thrift">
								<div className="shop-box-thrift">
								<button onClick={() => this.setPage('thrift')}>
									<span className="line-1">SHOP</span>
									<br/><br/>
									<span className="line-2">THRIFT</span>
									<span className="line-3"></span>
								</button>
									<img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="store-image" alt="thrift"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		} else if (page === 'menwear') {
			return (
				<div>
					<MenWear setPage={this.setPage} />
				</div>
			);
		} else if (page === 'womenwear') {
			return (
				<div>
					<WomenWear setPage={this.setPage} />
				</div>
			);
		} else if (page === 'thriftwear') {
			return (
				<div>
					<ThriftWear setPage={this.setPage} />
				</div>
			);
		}
	};
}

export default Store;
