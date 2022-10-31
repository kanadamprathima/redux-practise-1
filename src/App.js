import { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { deposit } from "./store/balance/slice";

function App() {
  const [balance, setBalance] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>Balance :€{balance}</p>
      <button onClick={() => dispatch(deposit(10))}>deposit</button>
    </div>
  );
}

export default App;
