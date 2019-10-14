import React, {useEffect} from 'react';
import ItemListDetail from '../item-list-detail';

import Loader from '../loader'
import ErrorIndicator from '../error/error-indicator';
import { connect } from 'react-redux';
import { withService } from '../hoc';
import {itemLoaded, loading, error} from '../../actions'

const ItemList = ({marketService, items, load, err, itemLoaded, loading, error}) => {

    useEffect(()=>{
        loading()
        marketService.getItem()
        .then((data)=>{ 
            itemLoaded(data)
        })
        .catch((err)=>{ 
            error(err)
        })
      
        //itemsLoaded was generated by mapDispatchToProps for dispatching in store data from service
    }, [])
    
    if(load){
        return <Loader/>
    }
    if(err){
        return <ErrorIndicator/>
    }
    return(
        <ul>
            {
                items.map(i=>(
                    <li key={i.id}>
                        <ItemListDetail item={i}/>
                    </li>
                ))
            }
        </ul>
    )
  
}

const mapStateToProps = ({items, load, err}) => { 
    return {items, load, err};
}
const mapDispatchToProps = {
    itemLoaded, loading, error
};
//This object is shorthened implementation of fucntion bindActionCrators
const childConnect = connect(mapStateToProps, mapDispatchToProps)(ItemList);
//firstly, wrapp item-list component in context-function for connecting with redux;
export default withService()(childConnect);
// and then wrapp wrapped component in hoc for connecting with service