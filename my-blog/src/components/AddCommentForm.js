import React, { useState } from "react";

const AddCommentForm = ({ articleName, setAritcleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setcommentText] = useState("");

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: "post",
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const body = await result.json();
    setAritcleInfo(body);
    setUsername("");
    setcommentText("");
  };
  return (
    <div id="add-comment-form">
      <h3>Add a comment</h3>
      <label>
        Name:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Comments:
        <textarea
          cols="50"
          rows="4"
          value={commentText}
          onChange={(event) => setcommentText(event.target.value)}
        ></textarea>
      </label>
      <button onClick={() => addComment()}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
