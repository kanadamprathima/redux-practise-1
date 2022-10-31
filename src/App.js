// import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "./store/balance/slice";
import { selectBalance } from "./store/balance/selectors";

function App() {
  // const [balance, setBalance] = useState(0);
  const balance = useSelector(selectBalance);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>Balance :€{balance}</p>
      <button onClick={() => dispatch(deposit(10))}>deposit</button>
      <button onClick={() => dispatch(withdraw(10))}>Withdraw</button>
    </div>
  );
}

export default App;
