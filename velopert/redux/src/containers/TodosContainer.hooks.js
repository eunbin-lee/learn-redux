import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

// [Container Component]
function TodosContainer() {
  // [store에 저장했던 state 가져오기] - Redux의 현재 상태
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // [modules > todos.js 에서 설정해줬던 action 생성함수 호출]
  const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;
