import React from 'react';

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
  function deleteKeg(){
    props.handleDeleteKeg({id: props.id});
    console.log(props)
  }
  console.log(props);
  return (
    <div className = 'e'>
      <style jsx>{`

        .a{
          border-bottom: solid 2px black;
          width: 75%;
          padding-bottom: 2em;
          color: white;
          transition: 0.4s;
        }
        .b{

        }
        .c{

        }
        .d{
          display:flex;
          justify-content: space-evenly;
          width: 30%;
          height: 100%;

        }
        @media only screen and (max-width: 600px) {
          .d {
            width: 60%;
          }
        }
        .e{
          display: flex;
          align-items: center;
        }
        .z{
          color: red;

        }
        .volume{
          color: red;
          transition: 1s;
          font-size:3em;
        }
        i{
          color: white;
          transition: 0.1s;
          cursor: pointer;

        }
        i:active{
          opacity: 1;
          color: red;
        }
        .fa-trash:hover{
          color: red;
        }
      `}
      </style>
      <div className='a'>
        <p>{props.name}</p>
        <p><span className='volume'>{props.volume}</span> Oz remaining</p>
        <div className='b'>
          {
            props.details.map((bev,i)=>{
              console.log(bev)
              return <p className='c' key={i}>{bev}</p>;
              })
            }
          </div>
      </div>

      <div className='d'>
          <i  onClick ={addPint} className="fa fa-angle-up fa-2x"></i>

          <i  onClick={sellPint} className="fa fa-angle-down fa-2x"></i>

      </div>
      <p></p>
      <i onClick={deleteKeg} className="fa fa-trash"></i>
    </div>

  );
}


export default BeerDisplay;
