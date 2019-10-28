import React from 'react';
import {connect} from 'react-redux';
import CountBar from '../../components/count-bar';

const ForCountBar = ({cart}) =>{
        const total = cart.reduce((init, next)=>init+next.price, 0);
        return(
            <CountBar countOfItems ={cart.length} total={total}/>
        )
    }
    
const mapStateToProps = ({cart}) =>{
    return {cart}
}
    
export default connect(mapStateToProps)(ForCountBar);
