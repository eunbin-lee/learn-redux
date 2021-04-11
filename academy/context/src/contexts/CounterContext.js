import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterContext.Provider value={{ count, setCount, increment, decrement }}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCounter = () => {
  const { count, setCount, increment, decrement } = useContext(CounterContext);
  return { count, setCount, increment, decrement };
};
