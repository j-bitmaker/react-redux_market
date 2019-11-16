import React from 'react';
import './counter.css'

const Counter = ({count, inc, dec}) =>{

    return(
       <div className='row counter'>
           <div>
               <button onClick={dec} className='btn btn-outline-primary btn-sm'><i className="fa fa-minus-circle minus"></i></button>
           </div>
           <div>
                <h5>{count}</h5>
           </div>
           <div>
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

