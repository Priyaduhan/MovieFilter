import { use, useState } from "react";

function useCounter(initialValue = 0) {
  const [Counter, setCounter] = useState(initialValue);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);
  const reset = () => setCounter(initialValue);
  return { reset, increment, decrement, Counter };
}
export default useCounter;
{
  /* <div>
        <h2>using custom hooks</h2>
        <h1>Count : {Counter}</h1>
        <button onClick={increment}>Increment</button>
        <br />
        <button onClick={decrement}>Decrement</button>
        <br />
        <button onClick={reset}>Reset</button>
      </div> */
}
// const { Counter, reset, increment, decrement } = useCounter(0);
// import useCounter from "./useCounter";
