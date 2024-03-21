import React, { useState, useCallback } from 'react';

const TodoInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleInputChange = useCallback((e) => {
    setTask(e.target.value);
  }, []);

  const handleAddTask = useCallback(() => {
    if (task !== "") {
      addTask(task);
      setTask("");
    }
  }, [task, addTask]);

  return (
    <div className="p-6">
      <input
        className="bg-slate-100 rounded-md p-4 m-4"
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Create a new To-Do"
      />
      <button
        onClick={handleAddTask}
        className="bg-green-400 text-white p-2 m-3 rounded-md font-bold hover:bg-green-600"
      >
        Add Task
      </button>
    </div>
  );
};

export default TodoInput;