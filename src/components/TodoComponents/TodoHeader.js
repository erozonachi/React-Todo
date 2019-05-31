import React from 'react';
import TodoSearch from './TodoSearch';

const TodoHeader = (props) => (
  <div className='header'>
    <h2>Awesome Todo App</h2>
    <TodoSearch searchHandler={props.searchHandler} />
  </div>
);

export default TodoHeader;
