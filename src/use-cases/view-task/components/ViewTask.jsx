import React from 'react'

import { useDeleteTask } from '../../../hooks/tasks'

function StatusView ({ status, ...rest }) {
  if (status === 'todo')
    return (
      <div
        {...rest}
        className='rounded'
        style={{ ...StatusStyles, backgroundColor: 'blue' }}
      >
        Todo
      </div>
    )
  return (
    <div
      {...rest}
      className='rounded'
      style={{ ...StatusStyles, backgroundColor: 'green' }}
    >
      Completed
    </div>
  )
}

export function ViewTask ({ className, task }) {
  const deleteTask = useDeleteTask()

  return (
    <div className={`card ${className}`}>
      <div className='card-body'>
        <h5 className='card-title'>{task.title}</h5>
        <h6 className='card-subtitle mb-3'>
          <StatusView status={task.status} />
        </h6>

        <p className='card-text'>{task.description}</p>
        <button
          className='btn btn-danger'
          onClick={() => deleteTask.delete(task)}
          disabled={deleteTask.isLoading}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

const StatusStyles = {
  color: 'white',
  width: 'fit-content',
  padding: '0.2rem'
}
