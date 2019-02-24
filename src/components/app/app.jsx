import React, { Component } from 'react';
import AppHeader from '../app-header';
import FilterPanel from '../filter-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.lastItemId = 100;

    this.todoList = [
      {
        id: 1,
        name: 'Drink coffee',
      },
      {
        id: 2,
        name: 'Drink tea',
      },
      {
        id: 3,
        name: 'Go to school',
      },
    ];

    this.state = {
      filteredTodoList: [...this.todoList],
    };
  }

  deleteTodoItem(id) {
    const index = this.todoList.findIndex(todo => todo.id === id);

    this.todoList.splice(index, 1);

    this.filterTodoList();
  }

  addTodoItem(name) {
    this.lastItemId += 1;

    const newItem = {
      id: this.lastItemId,
      name,
    };

    this.todoList.push(newItem);
    this.filterTodoList();
  }

  toggleDone(id) {
    const index = this.todoList.findIndex(todo => todo.id === id);

    this.todoList[index].done = !this.todoList[index].done;

    this.filterTodoList();
  }

  toggleImportant(id) {
    const index = this.todoList.findIndex(todo => todo.id === id);

    this.todoList[index].important = !this.todoList[index].important;

    this.filterTodoList();
  }

  filterChange(filters) {
    this.filters = filters;

    this.filterTodoList();
  }

  filterTodoList() {
    this.setState(() => {
      let filteredTodoList = [...this.todoList];

      this.filters.forEach((filter) => {
        filteredTodoList = filteredTodoList.filter(filter);
      });

      return { filteredTodoList };
    });
  }

  render() {
    const { filteredTodoList } = this.state;

    return (
      <div className="b-page">
        <div className="b-page-item">
          <AppHeader
            todoList={filteredTodoList}
          />
        </div>
        <div className="b-page-item">
          <FilterPanel
            onFilter={filters => this.filterChange(filters)}
          />
        </div>
        <div className="b-page-item">
          <TodoList
            todoList={filteredTodoList}
            onDeleted={id => this.deleteTodoItem(id)}
            onToggleDone={id => this.toggleDone(id)}
            onToggleImportant={id => this.toggleImportant(id)}
          />
        </div>
        <div className="b-page-item">
          <ItemAddForm
            onAdded={name => this.addTodoItem(name)}
          />
        </div>
      </div>
    );
  }
}

export default App;
