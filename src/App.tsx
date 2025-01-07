import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      settodos([...todos, { id: Date.now(), name: todo, IsComplete: false }]);
      setTodo("");
    }

    console.log(todos);
  };

  return (
    <div className="App">
      <span className="heading">Today's Work List:</span>
      <InputField
        todo={todo}
        setTodo={setTodo} //@ts-ignore
        handleAdd={handleAdd}
      />
      <TodoList //@ts-ignore
        todos={todos}
        setTodos={settodos}
      />
    </div>
  );
};

export default App;
