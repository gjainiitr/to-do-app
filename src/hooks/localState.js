import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [tasks, setTasks] = useState(() => {
        try {
            const data = localStorage.getItem(key);
            if (data != null && data !== "") {            
                return JSON.parse(data);
            } else {
                return initialValue;
            }
        } catch (error) {
            alert(error);
        }        
    });

    const setLocalTasks = (value) => {        
        try {
            setTasks(value);
            localStorage.setItem(key, JSON.stringify(value)); 
        } catch (error) {
            alert(error);
        }               
    }

    return [tasks, setLocalTasks];
}

export default useLocalStorage;