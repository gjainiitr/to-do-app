import './Task.css';
import deleteIcon from '../../assets/delete.svg';
import { useState } from 'react';

function Task({ task, index, deleteTask, changeCompletionState, changeTaskTitle }) {

    const [isEditing, setIsEditing] = useState(false);
    const [newValue, setNewValue] = useState(task.title);

    const changeEditingState = () => {
        setIsEditing(!isEditing);
    }

    const cancelEditing = () => {
        setNewValue(task.title);
        changeEditingState();
    }

    const finishEditing = () => {
        changeTaskTitle(index, newValue);        
        changeEditingState();
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            finishEditing();
        }
        if (event.key === 'Escape') {
            cancelEditing();
        }
    }

    return (
        <div className="Task">
            <input type="checkbox" checked={task.isCompleted}  className='task-details' onChange={(event) => {changeCompletionState(index, event.target.checked)}}/>
            {isEditing && <input type="text" className='task-details' value={newValue} onChange={(event) => {setNewValue(event.target.value)}} onKeyDown={handleKeyPress} onBlur={finishEditing} />}
            {!isEditing && <p className={`task-details ${task.isCompleted ? 'completed-task' : ''}`} onClick={changeEditingState} >{task.title}</p>}
            <img src={deleteIcon} alt='delete task' className='task-details delete-button' onClick={(event) => {deleteTask(index)}}/>
        </div>
    );
}

export default Task;