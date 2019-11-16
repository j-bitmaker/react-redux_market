import React from 'react';
import {Link} from 'react-router-dom';
import Counter from '../../containers/counter';
import './details-cart.css'

const DetailsCart = ({ item, callDelete, dec, inc }) =>{
    const {id, name, img, brand, price, count} = item;
 return(
        <>
        <div className='item'>
              <div>                            
                     <span><img src={img} alt={name} width='300' heigth='300'/></span>
              </div>
                     <div className='main'>
                            <Link to='./items/:id'><h5>{name}</h5></Link>
                    
                     <h5>Count:</h5> <Counter count={count} inc={inc} dec={dec}/> 
                            <div className='total'>
                                   <h5>Total: ${price} </h5>
                            </div>
                     <button className="btn btn-outline-danger delete" onClick={callDelete}>
                            <i className="fa fa-trash">Delete from cart</i>
                     </button>
                            
                     </div>
       </div>
    
        </>
 )
}

export default DetailsCart;
