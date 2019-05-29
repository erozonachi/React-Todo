import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import InitialData from './storage/InitialData';
import LocalData from './storage/LocalData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: LocalData.fetchData() || InitialData,
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

        LocalData.saveData(newTodoList);

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
