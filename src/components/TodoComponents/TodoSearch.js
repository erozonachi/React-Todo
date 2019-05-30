import React from 'react';

const TodoSearch = (props) => (
  <div>
    <input onChange={props.searchHandler} placeholder='Search...' />
  </div>
);

export default TodoSearch;
