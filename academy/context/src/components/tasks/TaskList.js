import React from 'react';
import { useTodos } from '../../contexts/TodoContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { todos } = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <TaskItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TaskList;
