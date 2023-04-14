import './Todo.css';
import TaskEntryBar from '../TaskEntryBar/TaskEntryBar';
import TaskDetails from '../TaskDetails/TaskDetails';
import { useState } from 'react';

function Todo() {

    const [todos, setTodos] = useState([]);

    const addTodos = (todo) => {
        setTodos([...todos, todo]);        
    }

    return (
        <div className="Todo">
            <TaskEntryBar onAddingTodo={addTodos} />
            <TaskDetails tasks={todos}/>
        </div>
    );
}

export default Todo;