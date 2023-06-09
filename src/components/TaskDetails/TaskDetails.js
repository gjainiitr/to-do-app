import './TaskDetails.css';
import Task from '../Task/Task';

function TaskDetails({ tasks, selectedFilter, modifyTasks }) {

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

    const handleTaskTitleChange = (index, value) => {
        let newTasks = [...tasks];
        newTasks[index].title = value;
        modifyTasks(newTasks);
    }

    const items = tasks
        .map((task, index) => {
            if (selectedFilter === "all") {
                return <Task task={task} index={index} deleteTask={handleTaskDeletion} changeCompletionState={handleCheckboxChange} changeTaskTitle={handleTaskTitleChange} />
            } else if (selectedFilter === "finished" && task.isCompleted) {
                return <Task task={task} index={index} deleteTask={handleTaskDeletion} changeCompletionState={handleCheckboxChange} changeTaskTitle={handleTaskTitleChange} />
            } else if (selectedFilter === "unfinished" && !task.isCompleted) {
                return <Task task={task} index={index} deleteTask={handleTaskDeletion} changeCompletionState={handleCheckboxChange} changeTaskTitle={handleTaskTitleChange} />
            }
        });

    return (
        <div className="TaskDetails">
            <h3>Tasks:</h3>
            {items}
        </div>
    );
}

export default TaskDetails;