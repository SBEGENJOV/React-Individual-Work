import React, { useState } from 'react';
import TaskCreate from './taskCreate';

function taskShow({ task, onDelete,onUpdate }) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(task.id);
  };
  const handleUpdate = () => {
    setShowEdit(!showEdit);
  };
  const handleSumbit = (id,updateedTitle,updateedTask) => {
    setShowEdit(false);
    onUpdate(id,updateedTitle,updateedTask);
  };

  return (
    <div className="showDiv">
      {showEdit ? (
        <TaskCreate tasks={task} taskFormUpdate={true} onUpdate={handleSumbit} />
      ) : (
        <div>
          <h3 className="taskp3">Göreviniz:</h3>
          <p>{task.title}</p>
          <h3 className="taskp3">Yapılacaklar:</h3>
          <p>{task.taskDesk}</p>
          <div>
            <button className="btnDelete" onClick={handleDelete}>
              Sil
            </button>
            <button className="btnUpdate" onClick={handleUpdate}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default taskShow;
