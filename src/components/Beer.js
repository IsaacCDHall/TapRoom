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
        <style jsx>{`
          .beerContainer{
            display: flex;
            flex-flow: column wrap;
            width: 50%;
            height: 100%;
          }

        `}
        </style>
        <p>THIS IS TEH BEER PAGE</p>
        <br/>
        <section>
          <div className='beerContainer'>
            {this.props.beerList.map((bev, index) =>
              <BeerDisplay
                name={bev.beerName}
                details={bev.details}
                id={bev.id}
                key={index}
                volume={bev.volume}
                abv={bev.abv}
                brewery={bev.brewery}
                handleSellPint={this.props.handleSellPint}
                handleAddPint={this.props.handleAddPint}
                handleDeleteKeg={this.props.handleDeleteKeg}
                className='zzz'
              />
            )}

          </div>
        </section>
      </div>
    );

  }
}

export default Beer;
