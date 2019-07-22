import React from 'react';
import Confirm from'./Confirm';
import NewKegForm from './NewKegForm.js';
class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      sampleBeerName: '',
      sampleVolume: '',
      sampleBrewery: '',
      sampleAbv: ''
    };

    this.handleAddKeg = this.handleAddKeg.bind(this);
  }

  handleAddKeg(){
    this.setState({formVisibleOnPage: true});
    console.log(this.formVisibleOnPage);
  }

  render(){
    let currentlyVisibleContent;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKegForm  onNewKegCreation={this.props.onNewKegCreation} />;
    } else {
      currentlyVisibleContent = <Confirm onFormSubmission={this.handleAddKeg} />;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}


export default NewKegControl;
