import React from 'react';

const TodoSearch = (props) => (
  <div>
    <input onChange={props.searchHandler} />
  </div>
);

export default TodoSearch;
