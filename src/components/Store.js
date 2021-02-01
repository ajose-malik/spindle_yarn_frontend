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
							className="store-image"/>
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
							className="store-image"/>
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
							className="store-image"/>
							</div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <div className="footer-box1">
            <h1>Spindle & Yarn</h1>
            <h2>© 2021 Spindle & Yarn</h2>
          </div>
          <div className="footer-box2">
            <h1>About Us</h1>
            <h2>Developers</h2>
            <h4>Malik</h4>
            <h4>Noel</h4>
            <h4>Ryan</h4>
          </div>
          <div className="footer-box3">
            <h1>Social</h1>
            <h3>facebook</h3>
            <h3>instagram</h3>
          </div>
        </div>
      </footer>
      </div>
		)
	}
}

export default Store;
