import { useRef } from "react";

const NewTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Submit</button>
    </form>
  );
};
export default NewTodo;
