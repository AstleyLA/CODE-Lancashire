import React, { useState } from 'react';
import TodoInput from '../components/TodoInput.jsx';
import TodoList from '../components/TodoList.jsx';
import DayScheduler from '../components/Scheduler.jsx';

const Scheduler = () => {
  const [tasks, setTasks] = useState([]);

  // Function to add task to the scheduler
  const addTaskToScheduler = (task) => {
    // Implement the logic to add task to the scheduler
    console.log("Adding task to scheduler:", task);
  };

  // Function to add task to the todo list
  const addTaskToList = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to delete task from the todo list
  const deleteTaskFromList = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex justify-between">
      <div className="w-1/2 p-4">
        {/* Todo Input */}
        <TodoInput addTask={addTaskToList} />
        {/* Todo List */}
        <TodoList tasks={tasks} deleteTask={deleteTaskFromList} />
      </div>
      <div className="w-1/2 p-4">
        {/* Day Scheduler */}
        <DayScheduler tasks={tasks} addTask={addTaskToScheduler} />
      </div>
    </div>
  );
};

export default Scheduler;