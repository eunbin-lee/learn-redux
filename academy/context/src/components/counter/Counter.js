import React from 'react';
import { useCounter } from '../../contexts/CounterContext';

const Counter = () => {
  const { count, setCount, increment, decrement } = useCounter();
  return (
    <div>
      <h1>Number: {count}</h1>
      <p>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
      </p>
    </div>
  );
};

export default Counter;
