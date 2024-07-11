import { useState, useRef } from "react";


function CreateTweetForm({ addTweet }) {
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

     

      <form
      onSubmit={handleSubmit}
     
        type="text"
        name="content"
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        ref={contentInputRef}
      >

      <button type='submit'>List</button>
    </form>
  );
}



export default CreateTweetForm;