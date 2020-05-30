import React from 'react'

import { useFindTasks } from '../../../hooks/tasks'
import { ViewTask } from './ViewTask.jsx'

export function ViewTaskList ({ ...rest }) {
  const tasks = useFindTasks()
  const data = tasks.data || []

  return (
    <div {...rest}>
      {tasks.error ? (
        <div className='alert alert-danger'>{tasks.error.message}</div>
      ) : (
        ''
      )}

      {data.map((task, index) => (
        <ViewTask className='mb-3' key={index} task={task} />
      ))}

      {tasks.isLoading ? (
        <div className='d-flex justify-content-center'>
          <div className='spinner-border text-primary' role='status'>
            <span class='sr-only'>Loading...</span>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
