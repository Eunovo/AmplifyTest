import React from "react";

import { AddTask } from "../../add-task";

export function TaskDashboard() {
    return <div className="container">
        <h1 className="mb-5">Tasks</h1>

        <div>
            <h2>Add Task</h2>
            <AddTask />
        </div>
    </div>
}