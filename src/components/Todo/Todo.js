import './Todo.css';
import TaskEntryBar from '../TaskEntryBar/TaskEntryBar';
import TaskDetails from '../TaskDetails/TaskDetails';
import useLocalStorage from '../../hooks/localState';

function Todo() {
    const [todos, setTodos] = useLocalStorage("data", []);

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