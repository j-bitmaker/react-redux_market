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
const error = (error) =>{
    return {
        type: 'ERROR',
        payload: error
    }
}
export {
    itemLoaded,
    loading,
    error
}