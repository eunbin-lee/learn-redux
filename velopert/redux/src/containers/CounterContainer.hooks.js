import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase, setDiff } from '../modules/counter';

// [Container Component]
function CounterContainer() {
  // [store에 저장했던 state 가져오기] - Redux의 현재 상태
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();

  // [modules > counter.js 에서 설정해줬던 action 생성함수 호출]
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;

/*
[useSelector 최적화 (1)]
  const number = useSelector(state => state.counter.number);
  const diff = useSelector(state => state.counter.diff);

[useSelector 최적화 (2)]
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }), (left, right => {
      return left.diff === right.diff && left.number === right.number;
  }));

[useSelector 최적화 (3)]
  shallowEqual: 얕게 확인하기 때문에 불변성을 유지하는 것이 중요!
*/
