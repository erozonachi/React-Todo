import React from 'react';
import TodoHeader from './components/TodoComponents/TodoHeader';
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
      filteredList: 0,
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

  handleSearch = (event) => {
    const searchVal = event.target.value.toLowerCase();

    if (searchVal.trim() !== '') {
      this.setState(prevState => {
        const filteredItems = prevState.todoList.filter(item => item.task.toLowerCase().includes(searchVal));

        return {
          todoList: prevState.todoList,
          newTodoItem: prevState.newTodoItem,
          filteredList: filteredItems,
        }
      });
    } else {
      this.setState(prevState => ({
          todoList: prevState.todoList,
          newTodoItem: prevState.newTodoItem,
          filteredList: 0,
      }));
    }
  }

  handleCompleted = (id) => {
    this.setState(prevState => {
      const changedTodoList = prevState.todoList.map(todo => {
        todo.completed = (todo.id === id? !todo.completed : todo.completed);
        return todo;
      });
      LocalData.saveData(changedTodoList);

      return {
        todoList: changedTodoList,
      };
    });
  }

  handleClearCompleted = () => {
    this.setState(prevState => {
      const changedTodoList = prevState.todoList.filter(item => !item.completed);
      LocalData.saveData(changedTodoList);

      return {
        todoList: changedTodoList,
      };

    });
  }
  
  render() {
    return (
      <div>
        <TodoHeader searchHandler={this.handleSearch} />
        <TodoList 
          todos={this.state.filteredList || this.state.todoList} 
          doneClickHandler={this.handleCompleted}
        />
        <TodoForm 
          initialVal={this.state.newTodoItem} 
          changeHandler={this.handleChange} 
          submitHandler={this.handleSubmit} 
          clearHandler={this.handleClearCompleted}
        />
      </div>
    );
  }
}

export default App;
