import { useState } from "react";
import { createPortal } from "react-dom";
import UpdateList from "../UpdateList";

function List({ list, removeList, updateList }) {
  return (
    <>
      <button>delete</button>

      <button onClick={() => setShowModal(true)}>update</button>

      <UpdateList list={list} updateList={updateList} />
    </>
  );
}

export default List;
