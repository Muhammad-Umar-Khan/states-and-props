import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/button";
import Image from "./components/image";

function App() {
  const [todos, setTodos] = useState([
    { text: "learn hooks" },
    { text: "learn useEffect()" },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: newTask }]);
    setNewTask("");
  };
  useEffect(() => {
    console.log("rendred");
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        ></input>
        <button>Add</button>
      </form>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <li>{todo.text}</li>
          </div>
        );
      })}
    </div>
  );
}

export default App;
