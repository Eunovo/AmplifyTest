import React from 'react';

function StatusView ({ status, ...rest }) {
  if (status === 'todo')
    return (
      <div {...rest} className="rounded" style={{ ...StatusStyles, backgroundColor: 'blue' }}>
        Todo
      </div>
    )
  return (
    <div {...rest} className="rounded" style={{ ...StatusStyles, backgroundColor: 'green' }}>
      Completed
    </div>
  )
}

export function ViewTask ({ className, task }) {
  return (
    <div className={`card ${className}`}>
      <div class='card-body'>
        <h5 class='card-title'>{task.title}</h5>
        <h6 class='card-subtitle mb-3'>
          <StatusView status={task.status} />
        </h6>

        <p class='card-text'>{task.description}</p>
      </div>
    </div>
  )
}

const StatusStyles = {
  color: 'white',
  width: 'fit-content',
  padding: '0.2rem'
}
