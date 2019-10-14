import React from 'react';
import { Link } from 'react-router-dom';

const PageBask  = () =>{
  return (
      <div>
          <p>
              There is list of your choosen items
          </p>
          <br/>
          <Link to='/'>Back to home</Link>
      </div>
  )
}
export default PageBask;