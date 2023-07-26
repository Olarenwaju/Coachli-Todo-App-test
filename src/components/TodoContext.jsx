import React, {createContext, useState, useEffect} from "react";

const TodoContext = createContext();

const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        return storedTodos;
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    return (
        <TodoContext.Provider value={{todos, setTodos}}>
            {children}
        </TodoContext.Provider>
    );
};

export {TodoContext, TodoProvider};