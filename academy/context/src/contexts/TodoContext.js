import React, { createContext, useContext, useRef, useState } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const no = useRef(4);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, text: '홍길동', done: true },
    { id: 2, text: '유재석', done: false },
    { id: 3, text: '강호동', done: false },
  ]);
  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const onAdd = () => {
    if (text === '') return alert('값을 입력하세요');
    setTodos([...todos, { id: no.current++, text, done: false }]);
    setText('');
  };
  const onToggle = (id) => {
    const newData = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo,
    );
    setTodos(newData);
  };

  return (
    <TodoContext.Provider value={{ text, todos, onChange, onAdd, onToggle }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export const useTodos = () => {
  const { text, todos, onChange, onAdd, onToggle } = useContext(TodoContext);
  return { text, todos, onChange, onAdd, onToggle };
};
