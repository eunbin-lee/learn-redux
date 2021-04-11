import React from 'react';
import Color from './components/color/Color';
import ColorProvider from './contexts/ColorContext';
import CounterProvider from './contexts/CounterContext';
import Counter from './components/counter/Counter';
import Todos from './components/todos/Todos';
import TodoProvider from './contexts/TodoContext';
import Tasks from './components/tasks/Tasks';

const App = () => {
  return (
    <>
      <CounterProvider>
        <Counter />
      </CounterProvider>

      <hr />

      <ColorProvider>
        <Color />
      </ColorProvider>

      <hr />

      <TodoProvider>
        <Todos />
      </TodoProvider>

      <hr />

      <TodoProvider>
        <Tasks />
      </TodoProvider>
    </>
  );
};

export default App;
