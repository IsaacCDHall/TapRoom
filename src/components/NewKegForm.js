import React from 'react';
import { v4 } from 'uuid';

//change this form to a class base since we are storing local data
function NewKegForm(props){
  let _beerName;
  let _brewery;
  let _abv;
  let _volume;

  function handleAddKeg(event)  {
    event.preventDefault();

    props.onNewKegCreation({beerName: _beerName.value,details:[_brewery.value, _abv.value], volume: _volume.value, brewery: _brewery.value, abv: _abv.value, id: v4()});


    _volume.val = '';
    _beerName.val ='';
    _brewery.val = '';
    _abv.val = '';

  }
  return(
    <div className="newkegComponent">
      <style jsx> {`
          .newkegComponent{

          }
          form{
            display: flex;
            flex-flow: column wrap;
            width: 50%;
            padding: 2em;
            color: whitesmoke;
          }
          h2{
            -moz-box-shadow:    inset 0 0 10px #fff;
            -webkit-box-shadow: inset 0 0 10px #fff;
            box-shadow:         inset 0 0 10px #fff;

          }
          button{
            color: red;
          }
        `}
      </style>
      <form onSubmit={handleAddKeg}>
        <div>
          <h2>Name of Beer:</h2>
          <input
            type='text'
            id='beerName'
            ref={(input) => {_beerName = input;}}
            />
        </div>
        <div>
          <h2>Volume</h2>
          <input
            type='number'
            id='volume'
            ref={(input) => {_volume = input;}}
            />
        </div>
        <div>

          <h2>Brewery:</h2>
          <input
            type='text'
            id='brewery'
            ref={(input) => {_brewery = input;}}
            />
        </div>
        <div>
          <h2>Alcohol Content:</h2>
          <input
            type='number'
            id='abv'
            ref={(input) => {_abv = input;}}
            />

        </div>
        <br/>
        <button type="submit"><h1>Submit</h1></button>
      </form>
    </div>
  );
}


export default NewKegForm;
