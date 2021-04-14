import React, { useReducer } from 'react';

const initialState = { w: 100 };
const reducer = (state, action) => {
  switch (action.type) {
    case 'PLUS':
      return { w: state.w + action.step };
    case 'MINUS':
      return { w: state.w - action.step };
    case 'RESET':
      return { w: 100 };
    default:
      return state;
  }
};

const Test3 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div
        style={{
          background: 'tomato',
          width: state.w,
          height: 100,
          transition: '0.4s',
          margin: 30,
        }}
      ></div>
      <p>
        <button onClick={() => dispatch({ type: 'PLUS', step: 100 })}>
          증가 100
        </button>
        <button onClick={() => dispatch({ type: 'MINUS', step: 50 })}>
          감소 50
        </button>
        <button onClick={() => dispatch({ type: 'RESET' })}>원래대로</button>
      </p>
    </div>
  );
};

export default Test3;
