import React from 'react';
import {Link} from 'react-router-dom';

const ItemListDetail = ({ item }) =>{
    const {id, name, img, brand} = item;
 return(
        <>
        <span><Link to='./items/:id'>{name}</Link></span>
        <br/>
        <span><img src={img} alt={name}/></span>
        </>
 )
}

export default ItemListDetail;