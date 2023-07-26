import React from 'react'
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return (
    <div className='max-w-lg mx-auto p-4'>
      <h1 className='flex justify-center text-8xl font-normal mb-4 text-[#a52a2a3f]'> todos</h1>

      <TodoList/>
    </div>
  );
};

export default App;
