import axios from "axios";

const stocksList = async()=>{
  try {
      let res = await axios.get('db.json')
      return res.data;
  }
  catch(e){
     return e;
  }
}


export const getStockData = () => {
    return async(dispatch) => {
            try{
                dispatch({type: "GET_STOCK_REQUEST"});
                let data = await stocksList();
                dispatch({type:"GET_STOCK_SUCCESS",payload:data});
            }
            catch(e){
                dispatch({type:"GET_STOCK_FAILURE",payload:e.message});
            }
    }
}
