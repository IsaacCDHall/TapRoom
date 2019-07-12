import React, {Component} from 'react';
import BeerDisplay from './BeerDisplay.js'

import beerList from '../models/beerList.js';
const mainBG = {
  backgroundImage: 'none',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: 'red'
}
class Beer extends Component {
  componentDidMount(){
    document.body.style.background = '#fff';
    document.body.style= {mainBG}
    console.log('did mount')

  }
  render(){
    return (

      <div className="">
        <p>THIS IS TEH BEER PAGE</p>
        <section>
          <div className='mapFunc'>
            {beerList.map((bev, index) =>
              <BeerDisplay
                name={bev.beerName}
                details={bev.details}
                id={bev.id}
                key={index}
                volume={bev.volume}
                handleSellPint={this.props.handleSellPint}
                handleAddPint={this.props.handleAddPint}
              />
            )}

        </div>
        </section>
      </div>
    );

  }
}

export default Beer;
