import React, { Component } from 'react';
import ItemThrift from './ItemThrift';
import ItemThriftDetail from './ItemThriftDetail';
import axios from 'axios';

class ThriftWear extends Component {
	state = {
		products: [],
		page: 'index',
		productId: null
	};

	getItems = () => {
		axios
			.get('https://spindlexyarn.herokuapp.com/products')
			.then(response => this.setState({ products: response.data }))
			.catch(error => console.error(error));
	};

	componentDidMount = () => {
		this.getItems();
	};

	showDetail = (goto, id = null) => {
		if (goto === 'index') {
			this.setState({
				page: 'index'
			});
		} else if (goto === 'detail') {
			this.setState({
				page: 'detail',
				productId: id
			});
		}
	};

	render = () => {
		const { page } = this.state;
		if (page === 'index') {
			return (
				<div>
					<div className="row">
					{this.state.products.map(item => {
						if (item.category === 'thrift') {
							return(
								<div className="col s4">
								<ItemThrift item={item} showDetail={this.showDetail} />
								</div>
							)
						}
					})}
				</div>
			</div>
			);
		} else if (page === 'detail') {
			return (
				<div>
					{this.state.products.map(item => {
						if (item.id === this.state.productId) {
							return (
								<ItemThriftDetail
									item={item}
									showDetail={this.showDetail}
									getItems={this.getItems}
								/>
							);
						}
					})}
				</div>
			);
		}
	};
}

export default ThriftWear;
