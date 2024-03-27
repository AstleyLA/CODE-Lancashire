import React from 'react';

const Homepage = () => {

  const TodoListScreenshot = "../images/TodoListScreenshot.png"
  const SavedListScreenshot = "../images/SavedListScreenshot.png"
  const SchedulerScreenshot = ""

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">DayOrganiser</h1>

      {/* First section */}
      <div className="flex flex-col md:flex-row items-center">
      {/* Left section */}
      <div className="md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start items-center px-40">
        <p className="text-lg text-center md:text-center">Create a list of the tasks that you need to complete so you don't forget anything</p>
      </div>
      
      {/* Right section */}
      <div className="md:w-1/2">
        <img src={TodoListScreenshot} alt="Todo list screenshot" className="w-full" />
      </div>
    </div>

      {/* Divider */}
      <hr className="border-b-2 border-gray-400 mb-8" />

      {/* Second section */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-8">
        <div className="md:w-1/2">
          <img src={SavedListScreenshot} alt="Screenshot of saved lists" className="w-full" />
        </div>
        <div className="md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start items-center px-40">
        <p className="text-lg text-center md:text-center">Have a list of tasks that often need repeating together? Create a saved list of tasks that you can add to your To-Do List in a single click</p>
      </div>
      </div>
      

      {/* Divider */}
      <hr className="border-b-2 border-gray-400 mb-8" />

      {/* Third section */}
      <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start items-center px-40">
        <p className="text-lg text-center md:text-center">Plan how long each task will take so that you can see how much of your day is taken up, and how much you have free!</p>
      </div>
        <div className="md:w-1/2">
          <img src={SchedulerScreenshot} alt="Screenshot of scheduler" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

