import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="🖊️ Add item..."
        />
        <i
          className="fas fa-plus"
          onClick={() => setTodos([...todos, todo])}
        ></i>
      </div>
      <div className="todos">
        {todos.map((value, index) => {
          return (
            <div className="todo" key={index}>
              <div className="left">
                <input type="checkbox" name="" id="" />
                <p>{value}</p>
              </div>
              <div className="right">
                <i
                  className="fas fa-times"
                  onclick={() => {
                    setTodos([todos.filter((index) => index !== index)]);
                  }}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
