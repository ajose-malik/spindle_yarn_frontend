import React, { Component } from 'react';


class Store extends Component {
	render = () => {
		return (
      <div>
      <h1>Spindle & Yarn</h1>
      <header>
        <div className="logo-container">
          <a href="#">
            <img src="spindle-and-yarn-logo.png"/>
          </a>
        </div>
        <ul>
          <li><a href="#">MENS</a></li>
          <li><a href="#">WOMENS</a></li>
          <li><a href="#">THRIFT ITEMS</a></li>
        </ul>
      </header>
      <div className="container">
        <div className="content-box">
          <div className="mens">
            <a href="#">
              <img src="https://images.pexels.com/photos/3193731/pexels-photo-3193731.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
            </a>
          </div>
          <div className="womens">
            <a href="#">
              <img src="https://images.pexels.com/photos/1075776/pexels-photo-1075776.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
            </a>
          </div>
          <div className="thrift">
            <a href="#">
              <img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
            </a>
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
