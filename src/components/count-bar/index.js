import React from 'react';

const CountBar = ({countOfItems, total }) =>{
    return(
        <div className="shopping-cart-table">
        <h2>Your Order</h2>
        <table className="table">
          <tbody>
          <tr>
  
            <th>Count</th>
            <th>Total</th>
            <th>Push</th>
          </tr>
  
          <tr>
             
              <td>{countOfItems}</td>
              <td>${total}</td>
              <td>
                <input className='btn btn-primary'type="button" value="Confirm Order"/>
              </td>
          </tr>
          </tbody>
        </table>
  
        <div className="total">
        </div>
      </div>
    )
}

export default CountBar;