import React from 'react'

function TodoItem( {compleated, id, title, toggleTodos, deleteTodo}) {
  return (
    <div>
      <li>
    <label>
      <input type="checkbox"  checked={compleated} onChange={e => toggleTodos(id,e.target.checked)}/>
      {title}
    </label>
    <button onClick={()=> deleteTodo(id)} className='btn btn-danger'>Delete</button>
  </li>
    </div>
  )
}

export default TodoItem
