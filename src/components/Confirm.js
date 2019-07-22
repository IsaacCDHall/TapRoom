import React from 'react';


function Confirm(props){
  console.log(props)

  return(
    <div>
      <style jsx>{`

        button{
          width: 50%;
          border: 1px solid white;
          margin-top: 20%;
        }
        .box{
          display: flex;
          border: 1px solid white;
          height: 80vh;
          justify-content: center;
          flex-flow: column wrap;
          align-items: center;
          width: 50%;
        }
    `}</style>
      <div className='box'>

        <h2>Are you sure you want to add a new Keg?</h2>
        <button onClick={props.onFormSubmission}>Yes</button>
      </div>

    </div>

  );
}


export default Confirm;
