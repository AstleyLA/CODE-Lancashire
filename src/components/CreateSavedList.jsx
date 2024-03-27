import React, { useState } from 'react';

const CreateSavedList = ({ onSave }) => {
    const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState(['']); // Initialize tasks with an empty task

  const handleAddTask = () => {
    setTasks([...tasks, '']); // Add an empty task to the tasks array
  };

  const handleTaskChange = (index, value) => {
    const newTasks = [...tasks];
    newTasks[index] = value;
    setTasks(newTasks);
  };

  const handleSaveList = () => {
    // Call the onSave function and pass the title and tasks as arguments
    onSave(title, tasks.filter(task => task.trim() !== ''));
    setTitle(''); // Clear the title input
    setTasks(['']); // Clear the tasks array
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg mb-4">
      <h2 className="text-lg font-bold mb-2">Create Set List</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-1/2 mb-2 px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
      />
      <div>
      {tasks.map((task, index) => (
        <div key={index} className="mb-2">
          <input
            type="text"
            value={task}
            onChange={(e) => handleTaskChange(index, e.target.value)}
            placeholder={`Task ${index + 1}`}
            className="w-1/2 px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
      ))}
    </div>
      <button
        onClick={handleAddTask}
        className="bg-purple-400 text-white py-2 px-4 rounded-md mr-2 hover:bg-purple-600"
      >
        Add Task
      </button>
      <button
        onClick={handleSaveList}
        className="bg-emerald-400 text-white py-2 px-4 rounded-md hover:bg-emerald-600"
      >
        Save List
      </button>
    </div>
  );
};

export default CreateSavedList;