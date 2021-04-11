import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const Tasks = () => {
  return (
    <div>
      <h1>Task 관리</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Tasks;
