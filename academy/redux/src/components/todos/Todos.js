import React from 'react';
import { useSelector } from 'react-redux';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
  const color = useSelector((state) => state.changecolor.color);

  return (
    <div>
      <h1 style={{ color: color }}>Todo 관리</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todos;
