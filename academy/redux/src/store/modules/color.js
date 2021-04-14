//액션 생성
//const 상수형액션명 = '파일명/액션명';
const PINK = 'color/PINK';
const TOMATO = 'color/TOMATO';
const GREEN = 'color/GREEN';

//액션 내보내기
export const pink = () => ({ type: PINK });
export const tomato = () => ({ type: TOMATO });
export const green = () => ({ type: GREEN });

//초기 상태
const initialState = {
  color: 'skyblue',
};

//리듀서 (순수함수)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PINK:
      return { color: 'pink' };
    case TOMATO:
      return { color: 'tomato' };
    case GREEN:
      return { color: 'green' };
    default:
      return state;
  }
};

export default reducer;
