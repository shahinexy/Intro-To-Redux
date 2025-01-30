import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (payload: number) => {
    dispatch(increment(payload));
  };

  const handleDecrement = (payload: number) => {
    dispatch(decrement(payload));
  };

  return (
    <>
      <h2>Counter With Redux</h2>
      <button onClick={()=>handleIncrement(5)}>Increment</button>
      <div>{count}</div>
      <button onClick={()=>handleDecrement(5)}>Decrement</button>
    </>
  );
}

export default App;
