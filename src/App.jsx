import { useState } from "react";
import "./App.css";
import Content from "./Composants/Task";

function App() {
  const [newTask, setNewTask] = useState("");
  const [MyArray, setMyArray] = useState([]);

  const addTask = () => {
    if (newTask !== "") {
      setMyArray([...MyArray, newTask]);
      setNewTask("");
      console.log("MyArray", MyArray);
    }
  };

  const renderMyArray = () => {
    return MyArray.map((newTask, index) => {
      return (
        <div key={index}>
          <p>
            {newTask}
            <button>En cours</button>
          </p>
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Ma To-Do List</h2>
      <input
        type="text"
        name="newTask"
        value={newTask}
        placeholder="Insérer votre tâche"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="add-button" onClick={addTask}>
        Insérer Tâche
      </button>
      <p>Ma liste :</p>
      {renderMyArray()}
    </div>
  );
}

export default App;
