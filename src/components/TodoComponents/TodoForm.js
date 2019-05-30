import React from 'react';

const TodoForm = (props) => (
  <div className='footer'>
    <form
      onSubmit={props.submitHandler}
    >
      <button className='clear-btn' type='button' onClick={props.clearHandler}>Clear Completed</button>
      <input value={props.initialVal} onChange={props.changeHandler} placeholder='New Todo...' />
      <button type='submit'>Add Todo</button>
    </form>
  </div>
);

export default TodoForm;
