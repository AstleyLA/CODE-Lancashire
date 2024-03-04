import { useState } from 'react'
import './App.css'

const App = () => {

const [tasks,setTasks] = useState([]);
const [task,setTask] = useState("");

const addTasks = () => {
  if(task!== ""){
    setTasks([...tasks,task])
    setTask("");
    console.log(tasks);
  }
}

const deleteTasks = (index) => {
  const updatedList = [...tasks];
  updatedList.splice(index,1)
  setTasks(updatedList);
}

  return(
   <div className = "flex flex-col items-center">
    <h1 className="text-4xl m-16 font-bold"> To-Do List App</h1>
   <div className= "p-6">
    <input className= "bg-slate-100 rounded-md p-4 m-4" 
    type="text" 
    value={task} 
    onChange = {(e)=>{
      setTask(e.target.value);
    }} 
    placeholder = "Create a new To-Do"/>
    <button onClick={addTasks}
    className = "bg-green-400 text-white p-2 m-3 rounded-md font-bold hover:bg-green-600">Add Task</button>
   </div>
   <div>
  {tasks?.length > 0 ? (
    <ul>
      {tasks.map((task, index) => (
        <div className = "flex bg-slate-100 m-4 py-4 pl-12 pr-4 rounded-md" key={index}>
          <li className = "self-center font-semibold pr10 mr-6 grow">{task}</li>
          <button onClick={()=>{deleteTasks(index)}}
          className="bg-red-500 text-white p-2 mx-1 rounded-md font-bold hover:bg-red-700">Delete</button>
        </div>
      ))}
    </ul>
  ) : (
    <div>
      <p>No Task Found</p>
    </div>
  )}
</div>
    </div>
  )
}

export default App;

