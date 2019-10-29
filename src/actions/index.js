const itemLoaded = (item) =>{
    return {
        type: 'ITEM_LOADED',
        payload: item
            };
        };
const loading = () =>{
    return {
        type: 'LOADING'
    }
}
const errorThrown = (error) =>{
    return {
        type: 'ERROR',
        payload: error
    }
}

const addItem = (id) =>{
    return {
        type: 'ADD_ITEM',
        payload: id
    }
}

const deleteItem = (id) =>{
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
}

const inc = (id) =>{
    return {
        type: 'INC',
        payload: id
    }
}

const dec = (id) =>{
    return {
        type: 'DEC',
        payload: id
    }
}

const incInCart = (id) =>{
    return {
        type: 'INC_IN_CART',
        payload: id
    }
}

const decInCart = (id) =>{
    return {
        type: 'DEC_IN_CART',
        payload: id
    }
}

const sortAll = () =>{
    return {
        type: 'SORT_ALL',
    }
}

const sortLaptop = () =>{
    return {
        type: 'SORT_LAPTOP'
    }
}
const sortDocking = () =>{
    return {
        type: 'SORT_DOCKING'
    }
}
const sortRAM = () =>{
    return {
        type: 'SORT_RAM'
    }
}
const sortSSD = () =>{
    return {
        type: 'SORT_SSD'
    }
}

const searchItems = (val) =>{
    return{
    type: 'SEARCH_ITEMS',
    payload: val
    }
}


const fetchItemsFromService = (marketService, dispatch) => () =>{
                dispatch(loading());
                marketService.getItem()
                .then((data)=> {console.log(data); return dispatch(itemLoaded(data))})
                .catch((err)=> dispatch(errorThrown(err)))
        } 
        //basic function for dispatching 
export  {fetchItemsFromService, itemLoaded, addItem, deleteItem, 
    inc, dec, incInCart, decInCart, sortDocking, 
    sortAll, sortLaptop, sortRAM, sortSSD, searchItems}
    
