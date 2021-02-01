import React, { Component } from 'react';
import MenWear from './MenWear';
import WomenWear from './WomenWear';
import ThriftWear from './ThriftWear';

class Store2 extends Component {
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
					<h1>Spindle & Yarn</h1>
					<button onClick={() => this.setPage('men')}>MEN</button>
					<button onClick={() => this.setPage('women')}>WOMEN</button>
					<button onClick={() => this.setPage('thrift')}>THRIFT</button>
				</div>
			);
		} else if (page === 'menwear') {
			return <MenWear setPage={this.setPage} />;
		} else if (page === 'womenwear') {
			return <WomenWear setPage={this.setPage} />;
		} else if (page === 'thriftwear') {
			return <ThriftWear setPage={this.setPage} />;
		}
	};
}
export default Store2;
