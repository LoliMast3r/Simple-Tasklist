import React, { useState, useRef, useEffect } from "react";
import "./Styles.css";
import { Todo } from "../model";
import { MdModeEdit, MdDeleteSweep, MdFileDownloadDone } from "react-icons/md";

interface Props {
  todo: Todo;
  key: number;
  todos: Todo[];
  setTodos: any;
}
const TodoCard = ({ todo, key, todos, setTodos }: Props) => {
  const [Edit, setEdit] = useState<boolean>(false);
  const [EditTodo, setEditTodo] = useState<string>(todo.name);

  const HandleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, name: EditTodo } : todo))
    );
    setEdit(false);
  };

  const HandleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const HandleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, IsComplete: !todo.IsComplete } : todo
      )
    );
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [Edit]);

  return (
    <form className="TodoCard" onSubmit={(e) => HandleEdit(e, todo.id)}>
      {Edit ? (
        <input
          ref={inputRef}
          className="TodoCard__text"
          value={EditTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          onBlur={() => setEdit(false)}
        />
      ) : todo.IsComplete ? (
        <s className="TodoCard__text">{todo.name}</s>
      ) : (
        <span className="TodoCard__text">{todo.name}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!Edit && !todo.IsComplete) {
              setEdit(!Edit);
            }
          }}
        >
          <MdModeEdit />
        </span>
        <span className="icon" onClick={() => HandleDelete(todo.id)}>
          <MdDeleteSweep />
        </span>
        <span className="icon" onClick={() => HandleDone(todo.id)}>
          <MdFileDownloadDone />
        </span>
      </div>
    </form>
  );
};

export default TodoCard;
