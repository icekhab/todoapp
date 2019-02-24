import React, { Component } from 'react';
import './app-header.css';

class AppHeader extends Component {
  render() {
    const { todoList } = this.props;
    const doneCount = todoList.filter(item => item.done).length;
    const todoCount = todoList.length - doneCount;

    return (
      <div className="app-header">
        <h1 className="app-header__text">My Todo list</h1>
        <span className="app-header__todo-counts">
          {`${todoCount} more to do, ${doneCount} done`}
        </span>
      </div>
    );
  }
}

export default AppHeader;
