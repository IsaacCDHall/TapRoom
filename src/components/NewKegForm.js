import React from 'react';
import { v4 } from 'uuid';

//change this form to a class base since we are storing local data
function NewKegForm(props){
  let _beerName = null;
  let _brewery = null;
  let _abv = null;
  let _volume = null;

  function handleNewKegCreation(event)  {
    event.preventDefault();

    props.onNewKegCreation({beerName: _beerName.value, volume: _volume.value, brewery: _brewery.val, abv: _abv.val, id: v4()});

    _beerName.val ='';
    _brewery.val = '';
    _abv.val = '';

  }
  return(
    <div className="newkegComponent">
      <style jsx> {`

        `}
      </style>
      <form onSubmit={handleNewKegCreation}>

        <h2>Name of Beer:</h2>
        <input
          type='text'
          id='name'
          ref={(input) => {_beerName = input;}}
        />

      <h2>Brewery:</h2>
        <input
          type='text'
          id='brewery'
          ref={(input) => {_brewery = input;}}
        />
        <h2>Alcohol Content:</h2>
        <input
          type='number'
          id='alcohol'
          ref={(input) => {_abv = input;}}
        />
      <h2>Volume</h2>
        <input
          type='number'
          id='volume'
          ref={(input) => {_volume = input;}}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default NewKegForm;
