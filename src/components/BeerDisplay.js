import React, { useState } from 'react';

function BeerDisplay(props){

  function sellPint(){
    props.handleSellPint({id: props.id});
    console.log(props.volume)
  }
  function deleteKeg(){
    props.handleDeleteKeg({id: props.id});
    console.log(props)
  }
  console.log(props);
  return (
    <div>
      <style jsx>{`

      `}
      </style>
      <p>{props.name}</p>
      <p>{props.volume}</p>
      <div className=''>
        <div className=''>
          {
            props.details.map((bev,i)=>{
              console.log(bev)
              return <p className='' key={i}>{bev}</p>;
            })
          }
        </div>

        <div className=''>


          <i onClick={sellPint} className="fa fa-angle-down"></i>
        </div>
        <i onClick ={deleteKeg} className="fa fa-times fa-2x"></i>

      </div>

    </div>

  );
}


export default BeerDisplay;
