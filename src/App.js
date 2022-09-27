import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Button from "./components/button";
import Image from "./components/image";

function App() {
  const [todos, setTodos] = useState([
    { text: "learn hooks" },
    { text: "learn useEffect()" },
  ]);
  const [users, setUsers] = useState("");
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: newTask }]);
    setNewTask("");
  };

  const makeRequest = async () => {
    try {
      const data = await fetch(`https://jsonplaceholder.typicode.com/${users}`);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${users}`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, [users]);

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
      <button onClick={() => setUsers("users")}>Users</button>
      <button onClick={() => setUsers("posts")}>Posts</button>
      <button onClick={() => setUsers("comments")}>Comments</button>
    </div>
  );
}

export default App;
