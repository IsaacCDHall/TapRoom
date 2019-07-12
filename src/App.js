import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js'
import MainPage from './components/MainPage.js'
import beerList from './models/beerList.js'
import Beer from './components/Beer.js'
class App extends Component {
  constructor(){
    super()
    this.state= {
      beerList: beerList
    }
    this.handleDeleteKeg = this.handleDeleteKeg.bind(this);
    this.handleSellPint = this.handleSellPint.bind(this);
  }
  handleSellPint(){

  }
  handleDeleteKeg(){

  }
  render(){
    console.log(this.state.beerList[1]);
    return (
      <div className="App">
        <style jsx global>{`
          *{
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }`}
        </style>
        <Header/>
        <BrowserRouter>

          <Switch>
            <Route exact path ='/' component={MainPage}/>
            <Route exact path ='/Beers' component={() => <Beer beerList={this.state.beerList} handleSellPint={this.handleSellPint} handleDeleteKeg={this.handleDeleteKeg}/>}/>
          </Switch>
        </BrowserRouter>
      </div>

    );

  }
}

export default App;
