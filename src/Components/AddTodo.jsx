import { useRef, useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ handleAddButton }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    console.log(`${todoName} due on: ${dueDate}`);
    handleAddButton(todoName, dueDate);
  };

  return (
    <div className="row kg-row">
      <div className="col-6">
        <input
          type="text"
          ref={todoNameElement}
          placeholder="Enter Todo Here"
        />
      </div>
      <div className="col-4">
        <input type="date" ref={dueDateElement} />
      </div>
      <div className="col-2">
        <button
          type="button"
          onClick={handleAddButtonClicked}
          className="btn btn-success kg-button"
        >
          <BiMessageAdd />
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
