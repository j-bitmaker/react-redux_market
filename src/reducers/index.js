const init = { 
    items: [], 
    load: true, 
    error: null,
    cart: [],
    copy: []
 };

const reducer = (state = init, action) => {

    const {items, cart, copy} = state;
    const {payload} = action;
    const foundItem = items.find(i=>i.id===action.payload),
    foundСartItem = cart.find(i=>i.id===action.payload),
    firstItems = items.slice(0, payload-1),
    lastItems = items.slice(payload, items.length),
    firstCartItems = cart.slice(0, payload-1),
    lastCartItems = cart.slice(payload, cart.length),
    newItem = {...foundItem},
    newCartItem = {...foundСartItem};
    const sorted = category => copy.filter(i=>i.type===category); //func for sorting items by category

    switch(action.type){
    case 'LOADING':
        return {
            ...state,
            items: [],
            load: true,
            error: null
        };
    case 'ITEM_LOADED': 
        return {
            ...state,
            items: payload,
            copy: payload,
            load: false,
            error: null
        };
    case 'ERROR':
        return {
            ...state,
            items: [],
            load: false,
            error: payload
        };
      case 'DEC':
            if (foundItem.count>1){
            let val = foundItem.count-1;
            newItem.count = val;
        } return {
            ...state, 
            error: null,
            load: false,
            items: [...firstItems, newItem, ...lastItems]
            };
    case 'INC':
        let val = foundItem.count+1;
        newItem.count = val;
        return {
            ...state, 
            error: null,
            load: false,
            items: [...firstItems, newItem, ...lastItems]
            };
        case 'DEC_IN_CART':
            if (foundСartItem.count>1){
            newCartItem.count--
            newCartItem.price -= newItem.price
        } return {
            ...state, 
            error: null,
            load: false,
            cart: [...firstCartItems, newCartItem, ...lastCartItems]
            };
        case 'INC_IN_CART':
            newCartItem.count++
            newCartItem.price += newItem.price
        return {
            ...state, 
            error: null,
            load: false,
            cart: [...firstCartItems, newCartItem, ...lastCartItems]
            };
        case 'ADD_ITEM':
            const idxCart = cart.indexOf(foundСartItem);
            const idxItems = items.indexOf(foundItem);
            if (idxCart ===-1) {
                const itemForAdd = {...foundItem}
                itemForAdd.price*=items[idxItems].count
                return {
                ...state,
                error: null,
                load: false,
                cart: [...state.cart, itemForAdd]
                } 
            } else {
                newCartItem.count+=foundItem.count;
                newCartItem.price+=foundItem.count*foundItem.price;  
                return {
                    ...state,
                    cart: [...cart.slice(0, idxCart), newCartItem, ...cart.slice(idxCart+1, cart.length)]
                }
                };
        case 'DELETE_ITEM':
            let cartItem = cart.find(i=>action.payload===i.id);
            const idx = cart.indexOf(cartItem)
            return{
                ...state,
                cart: [...cart.slice(0, idx), ...cart.slice(idx+1, cart.length)]
            }
        case 'SORT_LAPTOP':
            return{
                ...state,
                items: sorted('laptop')
            };
        case 'SORT_RAM':
            return{
                ...state,
                items: sorted('ram')
            };
        case 'SORT_SSD':
            return{
                ...state,
                items: sorted('ssd')
            };
        case 'SORT_DOCKING':
            return{
                ...state,
                items: sorted('docking')
            };
        case 'SEARCH_ITEMS':          
            const searchedItems = copy.filter(i=>i.name.toLowerCase().indexOf(payload.toLowerCase()) > -1)
            //for search panel
            return{
                ...state, 
                items: searchedItems
            }
        default: 
        return state;
}
}

export default reducer;