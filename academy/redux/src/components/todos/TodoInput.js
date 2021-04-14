import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, insert } from '../../store/modules/todos';

const TodoInput = () => {
  const text = useSelector((state) => state.todos.text);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(insert(text));
    dispatch(changeInput(''));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => dispatch(changeInput(e.target.value))}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoInput;
