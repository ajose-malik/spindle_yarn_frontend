import React, { Component } from 'react';
import '../store.css'

class Store extends Component {
	render = () => {
		return (
      <div>
      <header>
        <div className="logo-container">
          <img src="spindle-and-yarn-logo.png"
					className="logo-image"
					alt="logo"/>
        </div>
      </header>
      <div className="container">
        <div className="content-box">
          <div className="mens">
						<div className="shop-box-men">
						<button>
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
						<button>
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
						<button>
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
			<footer className="page-footer grey">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5 className="white-text">About Us</h5>
							<p className="grey-text text-lighten-4">We can write something about what Spindle & Yarn is.</p>
						</div>
						<div className="col l4 offset-l2 s12">
							<h4 className="white-text">Developers</h4>
							<ul>
								<li><a className="grey-text text-lighten-3" href="https://github.com/ajose-malik">Malik</a></li>
								<li><a className="grey-text text-lighten-3" href="https://github.com/noelm428">Noel</a></li>
								<li><a className="grey-text text-lighten-3" href="https://github.com/ryanklintworth">Ryan</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">
					© 2021 Spindle & Yarn
					<a className="grey-text text-lighten-4 right" href="#!">Shopping Cart</a>
					</div>
				</div>
			</footer>
      </div>
		)
	}
}

export default Store;
