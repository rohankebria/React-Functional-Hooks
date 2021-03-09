import React, { useState } from "react";

function App() {
  const [todos, setTools] = useState([
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

  return (
    <div>
      <div>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

function Todo({ todo, index }) {
  // => const {todo, index} = props;  // obj destr.

  return <div>{todo.text}</div>;
}

export default App;
