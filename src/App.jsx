import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/Homepage';
import TodoListPage from './pages/TodoListPage';
import SavedTodoLists from './pages/SavedTodoLists';
import DayScheduler from './pages/DayScheduler';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/todo-list" component={TodoListPage} />
          <Route path="/saved-todo-lists" component={SavedTodoLists} />
          <Route path="/day-scheduler" component={DayScheduler} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;