import React from 'react';
import './counter.css'

const Counter = ({count, inc, dec}) =>{

    return(
       <div className='row counter'>
           <div className='col'>
               <button onClick={dec} className='btn btn-outline-primary btn-sm'><i className="fa fa-minus-circle minus"></i></button>
           </div>
           <div className='col'>
                <h5>{count}</h5>
           </div>
           <div className='col'>
           <button
            onClick={inc}
            className="btn btn-outline-warning btn-sm">
                <i className="fa fa-plus-circle"/>
            </button>
           </div>
        </div>
    
    )

}

export default Counter;

