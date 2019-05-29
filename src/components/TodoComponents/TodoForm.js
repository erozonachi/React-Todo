import React from 'react';

export const TodoForm = (props) => (
  <div>
    <form
      onSubmit={props.submitHandler}
    >
      <input onChange={props.changeHandler} />
      <button type='submit'>Add Todo</button>
      <button type='button'>Clear Completed</button>
    </form>
  </div>
);
