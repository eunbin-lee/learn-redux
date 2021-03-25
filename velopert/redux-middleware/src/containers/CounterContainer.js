import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import {
  // decrease,
  // increase,
  decreaseAsync,
  increaseAsync,
} from '../modules/counter';

// Container Component
function CounterContainer() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    // dispatch(increase());
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    // dispatch(decrease());
    dispatch(decreaseAsync());
  };
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
