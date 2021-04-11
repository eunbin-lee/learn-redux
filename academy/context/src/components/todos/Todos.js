import React from 'react';
import { useTodos } from '../../contexts/TodoContext';

const Todos = () => {
  const { text, todos, onChange, onAdd, onToggle } = useTodos();
  return (
    <div>
      <input type="text" onChange={onChange} value={text} />
      <button onClick={() => onAdd(text)}>추가</button>
      {/* <h2>{text}</h2> */}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ color: todo.done ? 'red' : 'black' }}>
            번호: {todo.id} / 이름: {todo.text}
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => onToggle(todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
