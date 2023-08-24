import React, { useEffect, useState } from 'react'
import './Style.css'
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

function App() {


 
 const [todos,setTodos] = useState(() => {
   let localValue = localStorage.getItem('ITEMS')
   if(localValue === null) return []

    return JSON.parse(localValue)

 });

 useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
 },[todos])


 function addTodo (title) {
  setTodos(currentTodos => {
        return [
          ...currentTodos, {id:crypto.randomUUID(),title, compleated:false},
        ]
       })
 }

 function toggleTodos(id,compleated) {
  setTodos (currentTodos => {
    return currentTodos.map(todo => {
      if(todo.id === id){
        return {...todo, compleated}
      }
      return todo
    })
  })
 }



 function deleteTodo (id) {
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
 }

  return (
    <>
    <NewTodoForm onSubmit = {addTodo} />

    <h1 className='header'>Todo List</h1>

    <TodoList todos={todos} toggleTodos={toggleTodos} deleteTodo={deleteTodo} />
      

    </>
      
    
  )
}

export default App
