import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos.context";

const NewTodo: React.FC = (props) => {
  const todosCxt = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCxt.addTodo(enteredText);
  };

  return (
    <form onSubmit={handleOnSubmit} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Submit</button>
    </form>
  );
};
export default NewTodo;
