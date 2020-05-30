import React, { useState } from "react";

import { useSaveTask } from "../../../hooks/tasks";

export function AddTask() {
    const [data, setData] = useState({ title: "", description: "", status: "todo" });
    const saveTask = useSaveTask();

    function handleOnChange(e) {
        const { name, value } = e.target;
        setData(data => ({ ...data, [name]: value }));
        e.preventDefault();
    }

    function handleOnSubmit(e) {
        saveTask.save(data);
        e.preventDefault();
    }

    return <div>
        {saveTask.error ? <div className="alert alert-danger">
            {saveTask.error.message}
        </div> : ""}

        <form onSubmit={handleOnSubmit}>
            <div className="form-group">
                <label htmlFor="titleInput">Title</label>
                <input className="form-control" id="titleInput"
                    name="title" value={data.title} onChange={handleOnChange} />   
            </div>

            <div className="form-group">
                <label htmlFor="descriptionInput">Description</label>
                <input className="form-control" id="descriptionInput"
                    name="description" value={data.description} onChange={handleOnChange} />   
            </div>

            <div className="form-group">
                <label htmlFor="statusInput">Status</label>
                <select className="form-control" id="statusInput"
                    name="status" onChange={handleOnChange}>
                    <option value="todo">Todo</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            <div className="mt-5">
                <button className="btn btn-primary w-100" type="submit" disabled={saveTask.isLoading}>
                    Save
                </button>
            </div>
        </form>
    </div>
}