import React from 'react';

const TaskBlock = ({ task }) => {
  return (
    <div
      className="task-block"
      style={{
        backgroundColor: task.color,
        top: task.startTime * 40, // Adjust height based on time
        height: (task.endTime - task.startTime) * 40, // Adjust height based on duration
        // Add additional styles for resizing handles, etc.
      }}
    >
      {/* Add controls for color modification, resizing, and delete option */}
    </div>
  );
};

export default TaskBlock;