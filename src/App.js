import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about react hook",
      isCompleted: false,
    },
    {
      text: "Meet with friend",
      isCompleted: false,
    },
    {
      text: "Build app",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div>
      <div>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        {/*  Todo functional component will be called for each iteration in the list*/}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
export default App;

function Todo({ todo, index }) {
  // => const {todo, index} = props;  // obj destr.

  return <div>{todo.text}</div>;
}

function TodoForm({ addTodo }) {
  // destructuring from props
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
