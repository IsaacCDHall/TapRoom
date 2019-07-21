import React from 'react';


function ConfirmationQuestions(props){


  return(
    <div>
      <style jsx>{`

    `}</style>
      <h2>Are you sure you want to add a new Keg?</h2>
      <button onClick={props.onFormSubmission}>Yes</button>

    </div>

  );
}


export default ConfirmationQuestions;
