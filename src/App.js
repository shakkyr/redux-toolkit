import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import {increment,decrement,increaseAmount} from './redux/slices/counterSlices'


function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state?.counter)
  console.log(counter);
  return (
    <div className="App">
      <h1>redux toolkit counter</h1>
      <h2>counter: {counter?.value}</h2>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increaseAmount(10))}>x 10</button>
    </div>
  );
}

export default App;
