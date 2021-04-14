import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../../store/modules/counter';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const color = useSelector((state) => state.color.color);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{ color: color }}>숫자: {count}</h1>
      <p>
        <button onClick={() => dispatch(increment())}>증가</button>
        <button onClick={() => dispatch(decrement())}>감소</button>
        <button onClick={() => dispatch(reset())}>초기화</button>
      </p>
    </div>
  );
};

export default Counter;
