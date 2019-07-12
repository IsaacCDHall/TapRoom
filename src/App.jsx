import React, {Component} from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header.js'
import MainPage from './components/MainPage.js'
import beerList from './models/beerList.js'
import Beer from './components/Beer.js'
class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      beerList: beerList,
      className: 'contain'
    }
    this.handleAddPint = this.handleAddPint.bind(this);
    this.handleSellPint = this.handleSellPint.bind(this);
    this.updateClass = this.updateClass.bind(this);

  }

  handleSellPint(eachBeer){
    console.log('sellPint');
    let newState = Object.assign([], this.state.beerList);
    for (let i=0; i<newState.length; i++){
      if (newState[i].id === eachBeer.id){
        newState[i].volume --;
        console.log(newState[i].volume);
        console.log(eachBeer)
      }
    }
    this.setState({beerList: newState});
  }
  handleAddPint(eachBeer){
    console.log('buyPint');
    let newStateZ = Object.assign([], this.state.beerList);
    for (let i=0; i<newStateZ.length; i++){
      if (newStateZ[i].id === eachBeer.id){
        newStateZ[i].volume ++;
        console.log(newStateZ[i].volume);
      };
    };
    console.log(eachBeer)
    this.setState({beerList: newStateZ});
  }
  componentDidMount(){
  }
  updateClass() {
    let className = '';
    className = 'cover'
    this.setState({className})
    console.log(className)
  }
  render(){
    console.log(this.state.beerList[1]);
    console.log(this.state.className);
    return (
      <div className={this.state.className}>
        <div className="App">

          <Header/>
          <HashRouter>

            <Switch>
              <Route exact path ='/' component={MainPage}/>
              <Route exact path ='/Beers' component={() => <Beer beerList={this.state.beerList} handleSellPint={this.handleSellPint} handleAddPint={this.handleAddPint}/>}/>
            </Switch>
          </HashRouter>
        </div>

      </div>

    );

  }
}

export default App;
