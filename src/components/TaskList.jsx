import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks, setTasks, setTaskName, setIsAdd, setEditingID }) => {
  const handleUpdate = (task) => {
    setIsAdd(false);
    setEditingID(task.id);
    setTaskName(task.name);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      {tasks.length > 0 && (
        <div className="taskList">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={
                task.isCompleted ? "completed-tasks" : "incompleted-tasks"
              }
            >
              <input
                type="checkbox"
                name="isCompleted"
                id="isCompleted"
                onChange={() =>
                  setTasks(
                    tasks.map((t) =>
                      t.id === task.id
                        ? { ...t, isCompleted: !t.isCompleted }
                        : t
                    )
                  )
                }
              />
              <p id="taskName">{task.name}</p>
              <div className="tasklist-buttons">
                {!task.isCompleted ? (
                  <p id="btn-update" onClick={() => handleUpdate(task)}>
                    <i className="fa-regular fa-pen-to-square"></i>
                  </p>
                ) : (
                  ""
                )}
                <p id="btn-delete" onClick={() => handleDelete(task.id)}>
                <i class="fa-solid fa-trash"></i>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
