import React from 'react';

const Results = (props) => {
  return(
    <div className="results">
    {props.results.map((res,index)=>
      <span key={`arr${index}`} style={{display:'block'}}>{res}</span>
    )}
    </div>
  );
}

export default Results;
