const myLogger = (store) => (next) => (action) => {
  console.log(action);

  // 원래 상태 확인
  console.log('\tPrev', store.getState());

  const result = next(action);

  // dispatch 후의 상태 확인
  console.log('\tNext', store.getState()); // \t: tab

  // container에서 dispatch됐을 때의 return 값
  return result;
};

export default myLogger;
