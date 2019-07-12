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
    <div className = 'e'>
      <style jsx>{`
        i{
          cursor: pointer;
        }
        a{

        }
        b{

        }
        c{

        }
        d{

        }
        e{

        }
      `}
      </style>
      <p>{props.name}</p>
      <p>{props.volume}</p>
      <div className='a'>
        <div className='b'>
          {
            props.details.map((bev,i)=>{
              console.log(bev)
              return <p className='c' key={i}>{bev}</p>;
            })
          }
        </div>

        <div className='d'>


          <i onClick ={addPint} className="fa fa-angle-up fa-2x"></i>
          <i onClick={sellPint} className="fa fa-angle-down fa-2x"></i>
        </div>

      </div>

    </div>

  );
}


export default BeerDisplay;
