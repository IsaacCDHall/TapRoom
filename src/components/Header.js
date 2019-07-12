import React, {Component} from 'react';
import { Link, HashRouter } from 'react-router-dom';

class Header extends Component {
  render(){
    return (
      <div className="">
        <HashRouter>

          <Link to="/" style={{ textDecoration: 'none' }}>
            <a>Home</a>
          </Link>
          <Link to='/Beers' style={{ textDecoration: 'none' }}>
            <a>Beers</a>
          </Link>
        </HashRouter>
      </div>
    );

  }
}

export default Header;
