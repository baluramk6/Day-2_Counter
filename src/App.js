import "./styles.css";
import Counter from "./Components/Counter";

export default function App(props) {
  let count = 0;

  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter counter={count} />
    </div>
  );
}
