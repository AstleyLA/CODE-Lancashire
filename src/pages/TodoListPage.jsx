import React, { useState, useCallback } from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

const TodoListPage = () => {
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
    <div className="flex justify-center items-start">
      <div className="w-1/2 p-6">
        <TodoInput addTask={addTask} />
      </div>
      <div className="w-1/2 p-6">
        <TodoList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default TodoListPage;