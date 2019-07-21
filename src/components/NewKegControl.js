import React from 'react';
import ConfirmationQuestions from'./ConfirmationQuestions';
import NewKegForm from './NewKegForm.js';
class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      sampleBeerName: ' ',
      sampleVolume: ' ',
      sampleBrewery: ' ',
      sampleAbv: ' '
    };

    this.handleNewKegFormSubmission = this.handleNewKegFormSubmission.bind(this);
  }

  handleNewKegFormSubmission(){
    this.setState({formVisibleOnPage: true});
    console.log(this.formVisibleOnPage);
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKegForm  onNewKegCreation={this.props.onNewKegCreation} />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onFormSubmission={this.handleNewKegFormSubmission} />;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}


export default NewKegControl;
