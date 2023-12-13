import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learn React.js"), new Todo("Learn Typescript")];

  const handleOnAddTodo = (todoText: string) => {};

  return (
    <div>
      <NewTodo onAddTodo={handleOnAddTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
