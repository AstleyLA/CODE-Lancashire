import React from 'react';

const TodoList = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <div className="flex bg-slate-100 m-4 py-4 pl-12 pr-4 rounded-md" key={index}>
              <li className="self-center font-semibold pr10 mr-6 grow">{task}</li>
              <button
                onClick={() => { deleteTask(index) }}
                className="bg-red-500 text-white p-2 mx-1 rounded-md font-bold hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <p>No tasks found</p>
      )}
    </div>
  );
};

export default TodoList;