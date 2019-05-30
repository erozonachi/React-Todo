import React from 'react';
import { Todo } from './Todo';

const TodoList = (props) => (
  <ul>
    { props.todos.length === 0?
      'No Todo Item Found' :
      props.todos.map(todo => <Todo key={todo.id} todo={todo} doneClickHandler={props.doneClickHandler} />)
    }
  </ul>
);

export default TodoList
