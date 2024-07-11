import { useState } from "react";
import List from "../List/index.jsx";
import CreateListForm from "../CreateListForm/index.jsx"

import { data } from "../../data/data";

function ToDoList() {
  const [list, setList] = useState(data);
  // Create New List
  const addList= (newList) => {
;
  }


  // Delete a List
  const removeList = (listId) => {
    setList(list.filter(l => l.id !== listId));
  }

  // Update Tweet
  const updateList = (listId, newListContent) => {
    setList(list.map(t => {
      if (l.id === listId) {
          return {
            ...t,
            content: newListContent,
          }
      } else return t;
    }));
  }

  return (
    <div >
      <CreateListForm addList={addList}/>

      <section>
       
      </section>
    </div>
  );
}

export default ToDoList;