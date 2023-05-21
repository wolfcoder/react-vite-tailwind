import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default function TodoComponent() {
  // generate todos array with id and text
  const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Learn JSX" },
    { id: 3, text: "Learn Hooks" },
    { id: 4, text: "Learn Props"}
  ];
  // set todos state with todos array
  const [todosState, setTodosState] = useState(todos);

  const handleDeleteClick = (e) => {
    console.log("parent clicked todo");
    console.log(typeof(e.target.id));
    // remove todo with id
    const newTodos = todosState.filter(
      (todo) => todo.id !== parseInt(e.target.id)
    );
    console.log(newTodos);
    // set todos state with newTodos
    setTodosState(newTodos);
  };

  const handleaddTodo = (text) => {
    const newTodo = [
      ...todosState,
      // id get time
      { id: Date.now(), text: text },
    ]
    setTodosState(newTodo)

  }

  return (
    <div className="mx-auto max-w-xs">
      <h1 className=" text-xl font-bold my-4">Todos Project</h1>

      {todosState.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          id={todo.id}
          onTodoClick={handleDeleteClick}
        />
      ))}
      <TodoForm onAddTodo={handleaddTodo} />
    </div>
  );
}
