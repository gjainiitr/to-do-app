import './Todo.css';
import TaskEntryBar from '../TaskEntryBar/TaskEntryBar';
import TaskDetails from '../TaskDetails/TaskDetails';
import { useState } from 'react';

function Todo() {

    const [todos, setTodos] = useState([]);

    const addTodos = (todo) => {
        setTodos([...todos, todo]);        
    }

    const modifyTodos = (todos) => {
        setTodos(todos);
    }

    return (
        <div className="Todo">
            <TaskEntryBar onAddingTodo={addTodos} />
            <TaskDetails tasks={todos} modifyTasks={modifyTodos}/>
        </div>
    );
}

export default Todo;