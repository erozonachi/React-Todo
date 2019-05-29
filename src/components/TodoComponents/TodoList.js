import React from 'react';
import { Todo } from './Todo';

export const TodoList = (props) => (
  <ul>
    {props.todos.map(todo => <Todo key={todo.id} todo={todo} />)}
  </ul>
);
