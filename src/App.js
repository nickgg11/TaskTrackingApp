import React from "react";
import { Task } from "./task";
import { TaskForm } from "./addTaskButton";
import dbtasks from "./database.json";
import "./App.css";

function App() {
  const [tasks, setTasks] = React.useState(dbtasks);
  //ignore
  const [, rerenderpls] = React.useState({});
//ignore
  React.useEffect(() => {
    const interval = setInterval(() => rerenderpls({}), 1000)

    return () => clearInterval(interval)
  }, []);

  function addNewTask(name, date) {
    const tempArray = tasks.concat([
      { id: tasks.length, name, date, checked: false },
    ]);
    setTasks(tempArray);
  }

  function updateState(event, id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            checked: event.target.checked,
          };
        } else {
          return {
            ...task,
          };
        }
      })
    );
  }
  return (
    <div className="App">
      <TaskForm task={addNewTask}></TaskForm>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onChange={(e) => updateState(e, task.id)}
        />
      ))}
    </div>
  );
}

export default App;
