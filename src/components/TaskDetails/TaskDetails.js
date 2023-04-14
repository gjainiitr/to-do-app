import './TaskDetails.css';

function TaskDetails({ tasks }) {

    console.log(tasks);
    
    const items = tasks.map((task) => 
        <li>{task.title}</li>
    );

    return (
        <div className="TaskDetails">
            <h3>Tasks:</h3>
            {items}
        </div>
    );
}

export default TaskDetails;