import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js'
import MainPage from './components/MainPage.js'
import beerList from './models/beerList.js'
class App extends Component {
  constructor(){
    super()
    this.state= {
      beerList: beerList
    }
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <MainPage/>
      </div>
    );

  }
}

export default App;
