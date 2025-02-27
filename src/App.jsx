import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [taskName, setTaskName] = useState("");
  const [isAdd, setIsAdd] = useState(true);
  const [editingID, setEditingID] = useState(null);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            name: "Sample task",
            isCompleted: false,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="appContainer">
      <Header />
      <AddTask
        tasks={tasks}
        setTasks={setTasks}
        taskName={taskName}
        setTaskName={setTaskName}
        isAdd={isAdd}
        setIsAdd={setIsAdd}
        editingID={editingID}
        setEditingID={setEditingID}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        setTaskName={setTaskName}
        setIsAdd={setIsAdd}
        setEditingID={setEditingID}
      />
      <Footer />
    </div>
  );
}

export default App;
