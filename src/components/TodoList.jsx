import React, { useContext, useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from './TodoContext';
import TodoForm from './TodoForm';

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [filter, setFilter] = useState('All');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const updatedFilteredTodos = applyFilter(todos, filter);
    setFilteredTodos(updatedFilteredTodos);
  }, [todos, filter]);

  const applyFilter = (todos, filter) => {
    if (filter === 'Active') {
      return todos.filter((todo) => !todo.completed);
    } else if (filter === 'Completed') {
      return todos.filter((todo) => todo.completed);
    } else {
      return todos;
    }
  };

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEditTodo = (id, editedText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: editedText } : todo
      )
    );
  };

  const handleClearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  return (
    <div>
      <TodoForm onAddTodo={handleAddTodo} />
      <div className="">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onToggleComplete={handleToggleComplete}
            onEdit={handleEditTodo}
          />
        ))}
      </div>

      <div className="pt-4 pb-3 flex justify-center space-x-1 text-[12px] bg-white">

        <button
          onClick={() => setFilter('All')}
          className={`px-3 py-1 rounded ${filter === 'All' ? 'text-black  border border-[#a52a2a56]' : 'bg-transparent text-gray-700'} hover:border border-[#a52a2a56]`}
        >
          All
        </button>

        <button
          onClick={() => setFilter('Active')}
          className={`px-3 py-1 rounded ${filter === 'Active' ? 'text-black border border-[#a52a2a56]' : 'bg-transparent  text-gray-700'} hover:border border-[#a52a2a56]`}
        >
          Active
        </button>

        <button
          onClick={() => setFilter('Completed')}
          className={`px-3 py-1 rounded ${filter === 'Completed' ? 'text-black border border-[#a52a2a56]' : 'bg-transparent  text-gray-700'} hover:border border-[#a52a2a56]`}
        >
          Completed
        </button>


        <button
        onClick={handleClearCompleted}
        className="flex items-center ml-10 text-gray-700 hover:underline"
        >
        Clear Completed
        </button>
      </div>

      
    </div>
  );
};

export default TodoList;


