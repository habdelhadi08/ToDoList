import { useState, useRef } from "react";



function CreateList({ addList}) {
  const [content, setContent] = useState("");
  const contentInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (contentInputRef.current.value === '') {
      contentInputRef.current.focus();
      // alert('Please fill this out');
      return;
    }

    addList(content);
    setContent("");
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.container}>
      <Form.Label htmlFor="content">
        <h4>What is your Todo list today?</h4>
      </Form.Label>

       <Button type='submit'>new list</Button>
    </Form>
  );
}


export default CreateList;