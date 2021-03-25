import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

// [connect 톺아보기]
function TodosContainer({ todos, addTodo, toggleTodo }) {
  const onCreate = useCallback((text) => addTodo(text), [addTodo]);
  const onToggle = useCallback((id) => toggleTodo(id), [toggleTodo]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

// const mapStateToProps = (state) => ({ todos: state.todos });
// const mapDispatchToProps = { addTodo, toggleTodo };

// export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

export default connect((state) => ({ todos: state.todos }), {
  addTodo,
  toggleTodo,
})(TodosContainer);
