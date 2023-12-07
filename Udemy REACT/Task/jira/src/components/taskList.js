import React from 'react'
import TaskShow from './taskShow'


function taskList({tasks , onDelete,onUpdate }) {
  return (
    <div className='task-list'>
        {tasks.map((task,index)=>{
            return  <TaskShow key={index} task={task} onDelete={onDelete} onUpdate={onUpdate} />
        })}
    </div>
  );
}

export default taskList