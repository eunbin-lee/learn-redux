import React, { useReducer, useState } from 'react';

//초기값
const initialState = 0;
//타입 분리 - 순수함수
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

const Test1 = () => {
  //   const [count, setCount] = useState(0);
  //   const increment = () => {
  //     setCount(count + 1);
  //   };
  //   const decrement = () => {
  //     setCount(count - 1);
  //   };
  //   const reset = () => {
  //     setCount(0);
  //   };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>초기화</button> */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>증가</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>감소</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>초기화</button>
    </div>
  );
};

export default Test1;
