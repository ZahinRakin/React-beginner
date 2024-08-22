import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  function decrease(){
    setCount(count - 1);
  }

  function reset(){
    setCount(0);
  }

  function increase(){
    setCount(count + 1);
  }

  return (
    <>
      <p className="render-place">{count}</p>
      <div>
        <button className="counter-button" onClick={decrease}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increase}>Increment</button>
      </div>
    </>
  )
}

export default App
