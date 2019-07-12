import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js'
import MainPage from './components/MainPage.js'

class App extends Component {
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
