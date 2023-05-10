import React, { useEffect, useState } from "react";
import "./App.css";
import TaskToDo from "./Composants/Task";

function App() {
  const [newTask, setNewTask] = useState({ content: "", status: "A faire" });
  const [myArray, setMyArray] = useState([]);

  const handleChange = (e) => {
    setNewTask((previousValue) => {
      return {
        ...previousValue,
        content: e.target.value,
      };
    });
  };

  const addTask = () => {
    setMyArray([...myArray, newTask]);
    console.log("task", myArray);
  };

  const toDoToPending = (task) => {
    setMyArray((todoList) =>
      todoList.map((item) =>
        item === task ? { ...item, status: "En cours" } : item
      )
    );
  };

  const toPendingToDone = (task, i) => {
    setMyArray((todoList) =>
      todoList.map((item) =>
        item === task ? { ...item, status: "Terminé" } : item
      )
    );
  };

  const renderTaskToDo = () => {
    let filter = myArray?.filter((item) => {
      return item.status === "A faire";
    });
    return filter?.map((item, index) => {
      return (
        <TaskToDo
          content={item.content}
          state={item.status}
          key={index}
          action={() => toDoToPending(item, index)}
        />
      );
    });
  };

  const renderTaskPending = () => {
    let filter = myArray?.filter((e) => {
      return e.status === "En cours";
    });
    return filter?.map((item, index) => {
      return (
        <TaskToDo
          key={index}
          content={item.content}
          state={item.status}
          action={() => toPendingToDone(item)}
        />
      );
    });
  };

  const renderTaskDone = () => {
    let filter = myArray.filter((e) => {
      return e.status === "Terminé";
    });
    return filter.map((item, index) => {
      return (
        <TaskToDo key={index} content={item.content} state={item.status} />
      );
    });
  };

  useEffect(() => {
    console.log("test", newTask);
  }, [newTask]);

  useEffect(() => {
    console.log("myArray", myArray);
  }, [myArray]);

  return (
    <div className="App">
      <div className="title">
        <h1>Ma To-Do List </h1>
        <input placeholder="Insérer ici votre tâche" onChange={handleChange} />
        <button onClick={addTask}>Valider</button>
      </div>
      <div className="list">
        <div>
          <h1> A faire </h1>

          <div>{renderTaskToDo()}</div>
        </div>
        <div>
          <h1> En cours </h1>

          <div>{renderTaskPending()}</div>
        </div>
        <div>
          <h1> Terminé </h1>

          <div>{renderTaskDone()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
