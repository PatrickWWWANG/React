import { useSelector, useDispatch } from "react-redux";
// import actionCreater
import { increment, decrement, addToNum } from './store/modules/counterStore'
import { fetchChannelList } from "./store/modules/channelStore";
import { useEffect } from "react";

function App() {
  const { count } = useSelector(state => state.counter)
  const { channelList } = useSelector(state => state.channel)
  const dispatch = useDispatch()
  // use useEffect to trigger async request
  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <br></br>
      <button onClick={() => dispatch(addToNum(10))}>Add to 10</button>
      <button onClick={() => dispatch(addToNum(20))}>Add to 20</button>
      <ul>
        { channelList.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
