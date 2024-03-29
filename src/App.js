import React from 'react';
import TodoList from './Todo/TodoList'


function App() {

  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Buy Bread'},
    {id: 2, completed: false, title: 'Buy Car'},
    {id: 3, completed: false, title: 'Buy House'},
    {id: 4, completed: false, title: 'Buy Mouse'}
  ])



  function toggleTodo(id) {
    setTodos(todos.map( todo => {
      if(todo.is === id){
        todo.completed = ! todo.completed
      }
      return todo
    })
  )
  }
    return (
      <div className="wrapper">
        <h1>React</h1>
        <TodoList todos={todos} onToggle={toggleTodo}/>
      </div>
    );
}

export default App;
