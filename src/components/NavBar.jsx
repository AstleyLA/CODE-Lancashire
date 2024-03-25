import React from 'react';
import { Link } from 'react-router-dom'; 

const NavBar = () => {
  return (
    <header className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">DayOrganiser</Link> {/* Change this to your logo */}
        <nav>
          <ul className="flex space-x-4">
          <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <span className="nav-divider">|</span>
            </li>
            <li className="nav-item">
              <Link to="/todo-list" className="nav-link">To-Do List</Link>
            </li>
            <li className="nav-item">
              <span className="nav-divider">|</span>
            </li>
            <li className="nav-item"> 
                <Link to="/saved-todo-lists" className="nav-link">Saved To-Do Lists</Link>
            </li>
            <li className="nav-item">
              <span className="nav-divider">|</span>
            </li>
            <li className="nav-item"> 
                <Link to="/day-scheduler" className="nav-link">Day Scheduler</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;