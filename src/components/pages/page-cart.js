import React from 'react';
import CartList from '../../containers/for-cart-list';
import { Link } from 'react-router-dom';

const PageCart  = () =>{
  return (
      <div>
              <CartList/>
          <br/>
            <Link to='/'>Back to home</Link>
      </div>
  )
}
export default PageCart;