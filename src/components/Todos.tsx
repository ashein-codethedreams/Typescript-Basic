import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos.context";

const Todos: React.FC = (props) => {
  const todosCxt = useContext(TodosContext);
  return (
    <div>
      <ul className={classes.list}>
        {todosCxt.items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={todosCxt.removeTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    </div>
  );
};
export default Todos;
