import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getStockData } from '../redux/actions/actions';
import StockDetails from './StockDetails';
import StockList from './StockList';

export default function StockCompany() {
  const result = useSelector(state => state.stocksData);
  
  const dispatch = useDispatch();
  const [item, setItem] = useState({})

  useEffect(()=>{
    dispatch(getStockData())
  },[dispatch]);

  console.log("item", item);
  return (<div style={{display:'flex'}}>
    <div style={{flexBasis:'70%'}}>
       {result.isLoading ? <p>Loading</p>:null}
       <h1 style={{ marginLeft: "75px", display: "flex" }}>Stock List</h1>
      <table style={{ border: "2px solid black",marginLeft: '5%',width: '26%' }}>
        <thead style={{ backgroundColor: "lightblue",color: "white", border: "2px solid black" }}>
          <tr>
          <th>STOCK</th>
          <th>DATE</th>
          <th>LAST</th>
          </tr>         
        </thead>
        <tbody>
          {result?.items?.length && result.items.map(( list,key ) => (<StockList list={list} id={key} setItem = {setItem} />))}

        </tbody>
      </table>

    </div>
    <div style={{flexBasis:'30%'}}>

{item?.STOCK? <StockDetails item={item}/> : null}

</div>
    </div>
  )
}
