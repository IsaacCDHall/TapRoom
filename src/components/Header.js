import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return (
      <div className="">
        <p>test</p>
        <BrowserRouter>

          <Link to="/" style={{ textDecoration: 'none' }}>
            <a>Home</a>
          </Link>
          <Link to='../Beers' style={{ textDecoration: 'none' }}>
            <a>Beers</a>
          </Link>
        </BrowserRouter>
      </div>
    );

  }
}

export default Header;
