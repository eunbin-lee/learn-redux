//액션
const CHANGE_COLOR = 'changecolor/CHANGE_COLOR';

//액션 내보내기
//export const 함수명 = (매개변수) => ({type: 액션명, 액션변수: 매개변수})
export const changeColor = (color) => ({ type: CHANGE_COLOR, color });

//초기 상태
const initialState = { color: 'red' };

//리듀서(순수함수)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        color: action.color,
      };
    default:
      return state;
  }
};

export default reducer;
