import PropTypes from "prop-types";
import { useState } from "react";

export default function TodoForm(props) {
  const [inputTodo, setInputTodo] = useState("");
  const [inputTodoError, setInputTodoError] = useState("");
  const handleInputChange = (e) => setInputTodo(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputTodo.trim() === "") {
      setInputTodoError("Todo can not blank");
    } else {
      props.onAddTodo(inputTodo);
      setInputTodo("");
      setInputTodoError("");
    }
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <input
        value={inputTodo}
        onChange={handleInputChange}
        type="text"
        placeholder="Add todo"
        className="border-2 border-solid border-gray-400 p-1 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {inputTodoError && <small className="text-red-300">Todo Can not blank</small>}
    </form>
  );
}

TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
