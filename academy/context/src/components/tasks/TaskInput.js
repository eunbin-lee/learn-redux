import React from 'react';
import { useTodos } from '../../contexts/TodoContext';

const TaskInput = () => {
  const { text, onChange, onAdd } = useTodos();
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={onChange} />
      <button type="submit">추가</button>
    </form>
  );
};

export default TaskInput;
