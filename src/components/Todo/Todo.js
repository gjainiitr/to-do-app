import './Todo.css';
import TaskEntryBar from '../TaskEntryBar/TaskEntryBar';
import TaskDetails from '../TaskDetails/TaskDetails';
import useLocalStorage from '../../hooks/localState';
import {useState} from 'react';

function Todo() {
    const [todos, setTodos] = useLocalStorage("data", []);
    const [filter, setFilter] = useState("all"); 

    const addTodos = (todo) => {
        setTodos([...todos, todo]);        
    }

    const deleteCompletedTasks = () => {
        let newTasks = todos;
        newTasks = todos.filter((task) => {
            if (!task.isCompleted) return true;
            else return false;
        })
        setTodos(newTasks);
    }

    const modifyTodos = (todos) => {
        setTodos(todos);
    }

    const changeFilter = (newFilter) => {
        setFilter(newFilter);
    }

    return (
        <div className="Todo">
            <TaskEntryBar selectedFilter={filter} onAddingTodo={addTodos} onChangingFilter={changeFilter} deleteCompletedTasks={deleteCompletedTasks} />
            <TaskDetails tasks={todos} selectedFilter={filter} modifyTasks={modifyTodos}/>
        </div>
    );
}

export default Todo;