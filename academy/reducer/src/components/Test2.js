import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.step;
    case 'DECREMENT':
      return state - action.step;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

const Test2 = () => {
  const [count1, dispatch1] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, 100);
  const [count3, dispatch3] = useReducer(reducer, 200);

  return (
    <div>
      <h1>{count1}</h1>
      <button onClick={() => dispatch1({ type: 'INCREMENT', step: 10 })}>
        증가
      </button>
      <button onClick={() => dispatch1({ type: 'DECREMENT', step: 50 })}>
        감소
      </button>
      <button onClick={() => dispatch1({ type: 'RESET' })}>초기화</button>
      <hr />

      <h1>{count2}</h1>
      <button onClick={() => dispatch2({ type: 'INCREMENT', step: 100 })}>
        증가
      </button>
      <button onClick={() => dispatch2({ type: 'DECREMENT', step: 100 })}>
        감소
      </button>
      <button onClick={() => dispatch2({ type: 'RESET' })}>초기화</button>
      <hr />

      <h1>{count3}</h1>
      <button onClick={() => dispatch3({ type: 'INCREMENT' })}>증가</button>
      <button onClick={() => dispatch3({ type: 'DECREMENT' })}>감소</button>
      <button onClick={() => dispatch3({ type: 'RESET' })}>초기화</button>
      <hr />
    </div>
  );
};

export default Test2;
