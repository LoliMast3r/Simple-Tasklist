import React from "react";
import { Todo } from "../model";
import "./Styles.css";
import TodoCard from "./TodoCard";

interface Props {
  todos: Todo[];
  setTodos: any;
}
//@ts-ignore
const TodoList: React.FC = ({ todos, setTodos }: Props) => {
  return (
    //@ts-ignore
    <div className="todos">
      {todos.map((item) => (
        <TodoCard todo={item} key={item.id} todos={todos} setTodos={setTodos} />
      ))}
      {todos.map((item) => console.log(item.name))}
    </div>
  );
};

export default TodoList;
