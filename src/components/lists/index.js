import React from 'react';
import DetailsMain from '../details-main';
import DetailsCart from '../details-cart';
import './lists.css';

//component for all lists

const Lists = (CompDetails) => ({items, callDelete, callAdd, inc, dec}) =>{
    return(
        (
            <ul className='list-group'>
                {
                    items.map(i=>(
                        <li className='list-group-item lists' key={i.id}>
                            <CompDetails 
                            item={i} 
                            callAdd = {()=>{callAdd(i.id)}}
                            callDelete = {()=>{callDelete(i.id)}}
                            inc = {() =>{inc(i.id)}}
                            dec = {() =>{dec(i.id)}}
                            />
                        </li>
                    ))
                }
            </ul>
        )
    )
}

//components for sorted lists and basket

export const MainList = Lists(DetailsMain);

export const CartList = Lists(DetailsCart)

