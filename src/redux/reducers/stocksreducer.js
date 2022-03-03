const initialState = {
  isLoading: false,
  items: [],
  error: null
};
const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
     case 'GET_STOCK_REQUEST':
        return {isLoading: true};
     case 'GET_STOCK_SUCCESS':
        return {isLoading: false, items: action.payload, error: null}
        case 'GET_STOCK_FAILURE':
          return {isLoading: false, items: [], error: action.payload}
     default:
        return state;
  }
}
export default stocksReducer;