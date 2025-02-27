import React, { useState, useEffect } from "react";
import "./AddTask.css";

const AddTask = ({ tasks, setTasks, taskName, setTaskName, isAdd, setIsAdd, editingID, setEditingID }) => {
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isAdd && editingID !== null) {
      const task = tasks.find(t => t.id === editingID);
      if (task) {
        setTaskName(task.name);
      }
    }
  }, [isAdd, editingID, tasks, setTaskName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!taskName.trim()) {
      setError("Task name should not be empty");
      return;
    }

    if (isAdd) {
      const newTask = {
        id: Math.floor(Math.random() * 10000),
        name: taskName.trim(),
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) =>
          task.id === editingID ? { ...task, name: taskName.trim() } : task
        )
      );
      setIsAdd(true);
      setEditingID(null);
    }

    setTaskName("");
  };

  return (
    <div className="addTask">
      {error && <div className="error" role="alert">{error}</div>}
      <form onSubmit={handleSubmit} aria-describedby="error-message">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          name="taskName"
          placeholder="Enter task"
          aria-invalid={error ? "true" : "false"}
        />
        <button type="submit">{isAdd ? "ADD" : "Update"}</button>
      </form>
    </div>
  );
};

export default AddTask;
