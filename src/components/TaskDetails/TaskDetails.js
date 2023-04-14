import './TaskDetails.css';
import deleteIcon from '../../assets/delete.svg';

function TaskDetails({ tasks }) {

    const items = tasks.map((task) => 
        <div>  
            <input type="checkbox" checked={task.isCompleted}  className='task-details'/>
            <p className='task-details'>{task.title}</p>
            <img src={deleteIcon} alt='delete task' className='task-details delete-button'/>
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