//액션 생성
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const RESET = 'counter/RESET';

//액션 내보내기 - 액션타입 함수 만들기
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });

//초기 상태
const initialState = {
  count: 0,
};

//리듀서(순수함수 만들기)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
};

export default reducer;
