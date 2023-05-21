import PropTypes from "prop-types";

const TodoItem = (props) => {
  return (
    <div className="border-1 border-cyan-200 px-1 flex justify-between">
      <h1>{props.text}</h1>
      <span id={props.id} onClick={props.onTodoClick} className=" cursor-pointer py-1 px-4">x</span>
    </div>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoItem;
