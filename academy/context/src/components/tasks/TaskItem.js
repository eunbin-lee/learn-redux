import React from 'react';
import { useTodos } from '../../contexts/TodoContext';

const TaskItem = ({ todo }) => {
  const { onToggle } = useTodos();
  return (
    <li style={{ color: todo.done ? 'red' : 'black' }}>
      id: {todo.id} / text: {todo.text}
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
    </li>
  );
};

export default TaskItem;
