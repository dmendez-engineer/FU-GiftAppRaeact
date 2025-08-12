import React from 'react'

import PropTypes from 'prop-types';

function FirstApp({title}) {
    
  console.log("TITLO:",title);
  
  return (
  <>
    <div>FirstApp</div>
    <h1>Daniel Mendez</h1>

    <p>{title}</p>
  </>
      );
}

FirstApp.propTypes={

  title:PropTypes.string.isRequired,
  
}

FirstApp.defaultProps={
  title:'No hay titulo'
}

export default FirstApp