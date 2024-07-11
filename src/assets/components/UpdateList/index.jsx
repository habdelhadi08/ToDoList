import { useState } from "react";

function UpdateList({ list, setList, updateList }) {
  const [newListContent, setNewListContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // updateData(list.id, newListContent);
    // setShowModal(false);
  };

  return (
    <div>
      <h1>Create todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          value={newListContent}
          onChange={(e) => setNewListContent(e.target.value)}
        />

        <button type="submit">add</button>
        <div>
          <input type="checkbox" />
          <label>Create Mockup </label>
          <button type="submit">Edit</button>
          <button type="submit">Delete</button>
        </div>
        <div>
          <input type="checkbox" />
          <label>Create Static Layout</label>
          <button type="submit">Edit</button>
          <button type="submit">Delete</button>
        </div>
        <div>
          <input type="checkbox"/>
          <input type="text" placeholder="Add Interactivity"/>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateList;
