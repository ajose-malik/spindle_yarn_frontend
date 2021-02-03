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

					<div className="container">
						<div className="row">
							<img className="col s12 m4" src="https://images.pexels.com/photos/3193731/pexels-photo-3193731.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							onClick={() => this.setPage('men')}
							alt="mens"/>

							<img className="col s12 m4" src="https://images.pexels.com/photos/1075776/pexels-photo-1075776.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							onClick={() => this.setPage('women')}
							alt="womens"/>

							<img  className="col s12 m4" src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							onClick={() => this.setPage('thrift')}
							alt="thrift"/>
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
