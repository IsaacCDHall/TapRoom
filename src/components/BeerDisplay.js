import React, { useState } from 'react';

function BeerDisplay(props){
  console.log(props)

  function addPint(){
    props.handleAddPint({id: props.id});
    console.log(props.volume)
  }
  function sellPint(){
    props.handleSellPint({id: props.id});
    console.log(props.volume)
  }
  console.log(props);
  return (
    <div>
      <style jsx>{`
        i{
          cursor: pointer;
        }

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


          <i onClick ={addPint} className="fa fa-angle-up fa-2x"></i>
          <i onClick={sellPint} className="fa fa-angle-down fa-2x"></i>
        </div>

      </div>

    </div>

  );
}


export default BeerDisplay;
