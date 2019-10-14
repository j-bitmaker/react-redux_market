const init = { items: [], load: true, err: null };

const reducer = (state = init, action) => {
    switch(action.type){
    case 'LOADING':
    return {
        items: [],
        load: true
    };
    case 'ITEM_LOADED': 
    return {
        items: action.payload,
        load: false
    };
    case 'ERROR':
    return {
        items: [],
        load: false,
        err: action.payload
    }
    default: 
    return state;
}
}

export default reducer;