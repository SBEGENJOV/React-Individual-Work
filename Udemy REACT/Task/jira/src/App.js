import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/taskCreate";
import TaskList from "./components/taskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDesk) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 9999999),
        title,
        taskDesk,
      },
    ];
    setTasks(createdTasks);
  };

  const deleteTaskByID = (id) => {
   const afterDeletingTask= tasks.filter((task)=>{
      return task.id !== id;
    })
    setTasks(afterDeletingTask);
  };
  const editTaskByID = (id,updateedTitle,updateedTask) => {
   const updatedTask= tasks.map((task)=>{
      if(task.id===id){
        return {id,title:updateedTitle,taskDesk:updateedTask}
      }
      return task;
    });
    setTasks(updatedTask);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskByID} onUpdate={editTaskByID} />
    </div>
  );
}

export default App;
