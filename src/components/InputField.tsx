import React, { useRef } from "react";
import "./Styles.css";
import { IoIosAdd } from "react-icons/io";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="Input"
      onSubmit={(e) => {
        //@ts-ignore
        handleAdd(e);
        //@ts-ignore
        inputRef.current.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task:"
        className="InputBox"
      />
      <button type="submit" className="InputAdd">
        <span className="inputIcon">
          <IoIosAdd />
        </span>
      </button>
    </form>
  );
};

export default InputField;
