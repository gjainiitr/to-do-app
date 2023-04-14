import "./TaskEntryBar.css";
import { useState } from "react";

function TaskEntryBar({ onAddingTodo }) {
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task == null || task === "") {
            alert('No task to add. Task is empty');
        } else {            
            onAddingTodo(task);            
        }
    }

    const addTaskOnPressingEnter = (event) => {        
        if (event.key === 'Enter') {
            addTask();
        }
    }

    return (
        <div className="TaskEntryBar">
            <input name="taskentrybar" type="text" placeholder="Enter a task" onChange={ (event) => {setTask(event.target.value);} } onKeyDown={addTaskOnPressingEnter} />
            <button onClick={addTask}>Add</button>
        </div>
    );
}

export default TaskEntryBar;