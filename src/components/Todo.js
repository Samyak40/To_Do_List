import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task, toggleComplete, deleteToDo, editTodo}) => {
  return (
    <div className='todo'>
      <p onClick={()=> toggleComplete(task.id)} className={`${task.completed?'completed':""}`}>{task.task}</p>
    <div>
      <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
      
      <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteToDo(task.id)} />
    </div>
    </div>
  )
}

export default Todo
