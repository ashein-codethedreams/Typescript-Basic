const NewTodo = () => {
  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" />
      <button>Submit</button>
    </form>
  );
};
export default NewTodo;
