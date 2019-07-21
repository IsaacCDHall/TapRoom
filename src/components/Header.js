import React, {Component} from 'react';
import { Link, HashRouter } from 'react-router-dom';

class Header extends Component {
  render(){
    return (
      <div className="header" style={{  }}>
        <style jsx>{`
          .fa-home{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .fa-beer{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .fa-cog{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

        `}
      </style>
        <HashRouter>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <i className="fa fa-home fa-3x"></i>
          </Link>
          <Link onClick={this.updateClass}to='/Beers' style={{ textDecoration: 'none', color: 'white' }}>
            <i className="fa fa-beer fa-3x"></i>
          </Link>
          <Link onClick={this.updateClass}to='/Admin' style={{ textDecoration: 'none', color: 'white' }}>
            <i className="fa fa-cog fa-3x"></i>
          </Link>

        </HashRouter>
      </div>
    );

  }
}

export default Header;
