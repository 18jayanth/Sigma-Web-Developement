import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, multiply } from './redux/counter/counterSlice'
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  return (
    <>
      <Navbar />
      <button  onClick={() => dispatch(decrement())}>-</button>
      Currently Count Value is {count}
      <button  onClick={() => dispatch(increment())}>+</button>
      <button  onClick={() => dispatch(incrementByAmount(6))}>+</button>
      <button  onClick={() => dispatch(multiply())}>*</button>
      
    </>
  );
}


export default App;
