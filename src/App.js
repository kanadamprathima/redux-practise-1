import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, reset } from "./store/balance/slice";
import { selectBalance } from "./store/balance/selectors";

function App() {
  // const [balance, setBalance] = useState(0);
  const [number, setNumber] = useState(0);
  const balance = useSelector(selectBalance);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>Balance :€{balance}</p>
      <button onClick={() => dispatch(deposit(10))}>deposit</button>
      <button onClick={() => dispatch(withdraw(10))}>Withdraw</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <hr />
      <input
        type="number"
        value={number}
        onChange={(e) => {
          const parsed = parseInt(e.target.value);
          if (isNaN(parsed)) {
            setNumber("");
          } else {
            setNumber(parsed);
          }
        }}
      />
      <button onClick={() => dispatch(deposit(number), setNumber(0))}>
        {" "}
        deposit custom amount
      </button>
      <button onClick={() => dispatch(withdraw(number), setNumber(0))}>
        withdraw custom amount
      </button>
    </div>
  );
}

export default App;
