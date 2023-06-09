import './Task.css';
import deleteIcon from '../../assets/delete.svg';
import { useState, useEffect, useRef } from 'react';

function Task({ task, index, deleteTask, changeCompletionState, changeTaskTitle }) {

    const [isEditing, setIsEditing] = useState(false);
    const [newValue, setNewValue] = useState(task.title);
    const refToInput = useRef(null);

    useEffect(() => {
        setNewValue(task.title);
    }, [task.title]);

    useEffect(() => {
        if (isEditing && refToInput.current) {
            refToInput.current.focus();
        }
    }, [isEditing]);

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
            if (newValue === '') {
                cancelEditing();
                return;
            } else {
                finishEditing();
            }
        }
        if (event.key === 'Escape') {
            cancelEditing();
        }
    }

    return (
        <div className="Task">
            <input 
                type="checkbox" 
                checked={task.isCompleted}  
                className='task-details' 
                onChange={(event) => {changeCompletionState(index, event.target.checked)}} />
            {isEditing
            && <input 
                    type="text" 
                    ref={refToInput} 
                    className='task-details' 
                    value={newValue} 
                    onChange={(event) => {setNewValue(event.target.value)}} 
                    onKeyDown={handleKeyPress} 
                    onBlur={finishEditing} />}
            {!isEditing 
            && <p 
                    className={`task-details ${task.isCompleted ? 'completed-task' : ''}`} 
                    tabIndex={0} 
                    onKeyDown={(event) => {if (event.key === 'Enter' || event.key === ' ') {changeEditingState()}}}
                    onClick={changeEditingState} >{task.title}</p>}
            <img 
                src={deleteIcon} 
                alt='delete task' 
                tabIndex={0} 
                className='task-details delete-button' 
                onKeyDown={(event) => {if (event.key === 'Enter' || event.key === ' ') {deleteTask(index)}}}
                onClick={(event) => {deleteTask(index)}} />
        </div>
    );
}

export default Task;