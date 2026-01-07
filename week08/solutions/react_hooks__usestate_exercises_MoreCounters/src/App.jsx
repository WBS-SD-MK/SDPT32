import Counter from './components/Counter';
import { useState } from 'react';
const App = () => {
  // State for each counter
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  return (
    <div>
      <h1>Three Counters</h1>
      <Counter count={count1} setCount={setCount1} />
      <Counter count={count2} setCount={setCount2} />
      <Counter count={count3} setCount={setCount3} />
    </div>
  );
};

export default App;
