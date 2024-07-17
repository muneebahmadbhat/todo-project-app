import { useState } from "react";

function AddTodo({ handleAddButton }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    handleAddButton(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="row kg-row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter Todo Here"
          value={todoName}
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input type="date" value={dueDate} onChange={handleDateChange} />
      </div>
      <div className="col-2">
        <button
          type="button"
          onClick={handleAddButtonClicked}
          className="btn btn-success kg-button"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
