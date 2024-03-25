import React from 'react';
import TaskBlock from './TaskBlock';

const DayScheduler = ({ tasks }) => {
  // Generate time slots
  const timeSlots = [];
  for (let i = 0; i < 24; i++) {
    timeSlots.push(
      <div key={i} className="time-slot">{i}:00</div>
    );
  }

  return (
    <div className="day-scheduler">
      {/* Render time slots */}
      <div className="time-slots">
        {timeSlots}
      </div>
      {/* Render task blocks */}
      <div className="task-blocks">
        {tasks.map((task, index) => (
          <TaskBlock key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default DayScheduler;