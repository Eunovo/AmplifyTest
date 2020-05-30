import React from 'react'

import { AddTask } from '../../add-task'
import { ViewTaskList } from '../../view-task'

export function TaskDashboard () {
  return (
    <div className='container'>
      <h1 className='mb-5'>Tasks Manager</h1>

      <div className='d-flex justify-content-between'>
        <div style={{ width: "45%" }}>
          <h2 className="mb-5">Add Task</h2>
          <AddTask />
        </div>

        <div style={{ width: "45%" }}>
          <h2 className="mb-5">Tasks</h2>
          <ViewTaskList />
        </div>
      </div>
    </div>
  )
}
