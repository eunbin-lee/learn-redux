//액션 생성(input 값, 추가, 삭제, 토글)
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';

//액션 내보내기
//input 값: text 값 받기
export const changeInput = (text) => ({ type: CHANGE_INPUT, text });
//추가: text 값 받기
export const insert = (text) => ({
  type: INSERT,
  todo: { id: no++, text, done: false },
});
//삭제: id 값 받기
export const remove = (id) => ({ type: REMOVE, id });
//토글: id 값 받기
export const toggle = (id) => ({ type: TOGGLE, id });

//초기 상태
let no = 4;
const initialState = {
  text: '',
  todos: [
    { id: 1, text: '청소하기', done: true },
    { id: 2, text: '운동하기', done: false },
    { id: 3, text: '친구 만나기', done: false },
  ],
};

//리듀서(순수 함수)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, text: action.text };
    case INSERT:
      return { ...state, todos: [...state.todos, action.todo] };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    default:
      return state;
  }
};

export default reducer;
