
import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, incInCart, decInCart } from '../../actions';
import {CartList} from '../../components/lists';





const ForCartList = ({cart, callDelete, incInCart, decInCart}) => {
    
    return <CartList 
        items={cart}
        callDelete={callDelete}
        inc={incInCart}
        dec={decInCart}
        />
    }

const mapStateToProps = ({cart}) => { 
    return {cart};
}

const mapDispatchToProps = (dispatch) =>{
    return {
        callDelete: id =>dispatch(deleteItem(id)),
        incInCart: id=>dispatch(incInCart(id)),
        decInCart: id=>dispatch(decInCart(id))
    }
}

//This object is shorthened implementatiofn of fucntion bindActionCrators

export default connect(mapStateToProps, mapDispatchToProps)(ForCartList);
