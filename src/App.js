import React from 'react';
import TodoList from './Todo/TodoList'


function App() {

  const todos = [
    {id: 1, completed: false, title: 'Buy Bread'},
    {id: 2, completed: false, title: 'Buy Car'},
    {id: 3, completed: false, title: 'Buy House'},
    {id: 4, completed: false, title: 'Buy Mouse'}
  ]
    return (
      <div className="wrapper">
        <h1>React</h1>
        <TodoList todos={todos} />
      </div>
    );
}

export default App;
