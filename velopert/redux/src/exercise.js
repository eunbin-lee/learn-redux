import { createStore } from 'redux';

// [초기 상태]
const initialState = {
  counter: 0,
  text: '',
  list: [],
};

// [action type 생성]
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// [action 생성함수]
const increase = () => ({
  type: INCREASE,
});
const decrease = () => ({
  type: DECREASE,
});
const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});
const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

// [reducer] - 불변성 주의
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

// [store 생성]
const store = createStore(reducer);
console.log(store.getState());

// [store의 상태가 바뀔 때마다 호출되는 함수]
const listener = () => {
  const state = store.getState();
  console.log(state);
};

// [구독을 해제하고 싶을 때 호출하는 함수]
const unsubscribe = store.subscribe(listener);
// unsubscribe();

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));

// 브라우저 콘솔창에 입력해보기
window.store = store;
// store
// store.dispatch({ type: 'INCREASE' });
// store.dispatch({ type: 'DECREASE' });
// store.dispatch({ type: 'CHANGE_TEXT', text: '우와' });
// store.dispatch({ type: 'ADD_TO_LIST', item: { id: 1, text: '헤이헤이' }});

window.unsubscribe = unsubscribe;
// dispatch 실행해도 결과값은 콘솔창에 뜨지 않음
