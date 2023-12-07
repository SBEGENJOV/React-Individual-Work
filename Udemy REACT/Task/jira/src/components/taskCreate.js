import React, { useState } from "react";

function TaskCreate({ onCreate, tasks, taskFormUpdate,onUpdate }) {
  const [title, setTitle] = useState(tasks ? tasks.title : '');
  const [task, setTask] = useState(tasks ? tasks.taskDesk : '');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(taskFormUpdate){
      onUpdate(tasks.id,title,task)
    }
    else{
      onCreate(title, task);
    }    
    setTitle("");
    setTask("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="TaskUpdate">
          <h3>Lütfen Taskı Düzenleyiniz:</h3>
          <form className="TaskForm">
            <label className="taskLabel">Başlıgı Düzenleyiniz:</label>
            <input
              value={title}
              onChange={handleTitleChange}
              className="taskInput"
            />
            <label className="taskLabel">Taskı Düzenleyiniz:</label>
            <textarea
              value={task}
              onChange={handleTaskChange}
              className="taskInput"
              rows={5}
            />
            <button onClick={handleSubmit} className="taskBtn taskBtnUpd">
             Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="TaskDiv">
          <h3>Task Ekleyiniz</h3>
          <form className="TaskForm">
            <label className="taskLabel">Başlık:</label>
            <input
              value={title}
              onChange={handleTitleChange}
              className="taskInput"
            />
            <label className="taskLabel">Task girin:</label>
            <textarea
              value={task}
              onChange={handleTaskChange}
              className="taskInput"
              rows={5}
            />
            <button onClick={handleSubmit} className="taskBtn">
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
