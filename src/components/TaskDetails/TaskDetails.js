import './TaskDetails.css';

function TaskDetails({ tasks }) {

    const items = tasks.map((task) => 
        <li>{task}</li>
    );

    return (
        <div className="TaskDetails">
            <h3>Tasks:</h3>
            {items}
        </div>
    );
}

export default TaskDetails;