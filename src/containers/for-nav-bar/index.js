import React from 'react';
import NavBar from '../../components/nav-bar';
import {sortLaptop, sortSSD, sortRAM, sortDocking, searchItems} from '../../actions';
import {connect} from 'react-redux';
const ForNavBar = ({cart, sortDocking, sortLaptop, sortSSD, sortRAM, searchItems}) =>{

    return(
        <NavBar 
        countOfItems ={cart.length}
        sortDocking = {sortDocking}
        sortRAM = {sortRAM}
        sortSSD={sortSSD}
        sortLaptop={sortLaptop}
        searchItems={searchItems}
        />
    )
}

const mapStateToProps = ({cart}) =>{
    return {cart}
}

const mapDispatchToProps = dispatch =>{
    return {
    searchItems: val =>dispatch(searchItems(val)),
    sortLaptop: ()=>dispatch(sortLaptop()),
    sortRAM: ()=>dispatch(sortRAM()),
    sortDocking: ()=>dispatch(sortDocking()),
    sortSSD: ()=>dispatch(sortSSD())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ForNavBar);