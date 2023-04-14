import './TaskDetails.css';

function TaskDetails({ tasks }) {

    const items = tasks.map((task) => 
        <div>  
            <input type="checkbox" checked={task.isCompleted}  className='task-details'/>
            <p className='task-details'>{task.title}</p>
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