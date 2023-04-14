import './TaskDetails.css';
import deleteIcon from '../../assets/delete.svg';

function TaskDetails({ tasks, modifyTasks }) {

    const handleCheckboxChange = (index, value) => {
        let newTasks = [...tasks];
        newTasks[index].isCompleted = value;
        modifyTasks(newTasks);
    }

    const handleTaskDeletion = (index) => {
        let newTasks = [...tasks];
        newTasks.splice(index, 1);
        modifyTasks(newTasks);
    }

    const items = tasks.map((task, index) => 
        <div>  
            <input type="checkbox" checked={task.isCompleted}  className='task-details' onChange={(event) => {handleCheckboxChange(index, event.target.checked)}}/>
            <p className={`task-details ${task.isCompleted ? 'completed-task' : ''}`}>{task.title}</p>
            <img src={deleteIcon} alt='delete task' className='task-details delete-button' onClick={(event) => {handleTaskDeletion(index)}}/>
        </div>
    );

    return (
        <div className="TaskDetails">
            <h3>Tasks:</h3>
            {items}
        </div>
    );
}

export default TaskDetails;