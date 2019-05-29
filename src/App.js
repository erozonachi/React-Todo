import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      newTodoItem: '',
    };
  }

  handleChange = (event) => {
    const itemVal = event.target.value;

    this.setState(prevState => ({
      todoList: prevState.todoList,
      newTodoItem: itemVal,
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.newTodoItem.trim() !== '') {
      this.setState(prevState => {
        const newTodoList = prevState.todoList.concat({
          task: prevState.newTodoItem, 
          id: Date.now(), 
          completed: false,
        });

        return {
          todoList: newTodoList,
          newTodoItem: '',
        }
      });
    }
  }
  
  render() {
    return (
      <div>
        <TodoList 
          todos={this.state.todoList} 
        />
        <TodoForm 
          initialVal={this.state.newTodoItem} 
          changeHandler={this.handleChange} 
          submitHandler={this.handleSubmit} 
        />
      </div>
    );
  }
}

export default App;
