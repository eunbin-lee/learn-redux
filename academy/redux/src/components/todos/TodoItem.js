import React from 'react';
import { useDispatch } from 'react-redux';
import { remove, toggle } from '../../store/modules/todos';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li style={{ color: todo.done ? 'blue' : 'black' }}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => dispatch(toggle(todo.id))}
      />
      {todo.id}) 할일: {todo.text}
      <button onClick={() => dispatch(remove(todo.id))}>삭제</button>
    </li>
  );
};

export default TodoItem;
