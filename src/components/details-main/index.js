import React from 'react';
import {Link} from 'react-router-dom';
import Counter from '../../containers/counter';
import './details-main.css'

const DetailsMain = ({ item, callAdd, inc, dec}) =>{
    const {id, name, img, brand, price, count} = item;
 return(
        <>
              <div className='item'>
                     <div>                            
                            <span><img src={img} alt={name} width='300' heigth='300'/></span>
                     </div>
                     <div className='main'>
                            <Link to='./items/:id'><h5>{name}</h5></Link>
                     <h5>Price: ${price} </h5>
                     <div className='count'>
                     <h5>Count:</h5> <Counter count={count} inc={inc} dec={dec}/> 
                     </div>
                     <button className="btn btn-outline-success add" onClick={callAdd}>
                            <i className="fa fa-plus-circle">Add to cart</i>
                     </button>
                            
                     </div>
              </div>
        </>
 )
}

export default DetailsMain;