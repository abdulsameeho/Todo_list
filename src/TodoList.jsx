import React from 'react'
import TodoItem from './TodoItem'

function TodoList( { todos, toggleTodos, deleteTodo }) {
  return (
    <>
    

<ul className='list'>
  {todos.length ===0 && "Please add your todos....."}
  {todos.map((todo) => {
    return (
       <TodoItem 
        {...todo}
        toggleTodos={toggleTodos}
        deleteTodo={deleteTodo}
        key={todo.id}
       />
    )
  })}
  
 
</ul>
    </>
  )
}

export default TodoList
