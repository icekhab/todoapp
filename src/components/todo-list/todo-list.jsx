import React, { Component } from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

class TodoList extends Component {
  render() {
    const {
      todoList,
      onDeleted,
      onToggleImportant,
      onToggleDone,
    } = this.props;

    return (
      <ul className="todo-list list-group">
        {
            todoList.map(item => (
              <li className="todo-list__item list-group-item" key={item.id}>
                <TodoListItem
                  item={item}
                  onDeleted={() => onDeleted(item.id)}
                  onToggleImportant={() => onToggleImportant(item.id)}
                  onToggleDone={() => onToggleDone(item.id)}
                />
              </li>
            ))
        }
      </ul>
    );
  }
}

export default TodoList;
