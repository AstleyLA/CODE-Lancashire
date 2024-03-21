import React, { useState, useCallback } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback((task) => {
    setTasks([...tasks, task]);
  }, [tasks]);

  const deleteTask = useCallback((index) => {
    const updatedList = [...tasks];
    updatedList.splice(index, 1);
    setTasks(updatedList);
  }, [tasks]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl m-16 font-bold"> To-Do List App</h1>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;