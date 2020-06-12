import React from "react";

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upVoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: "POST",
    });
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <div id="upvotes-section">
      <button onClick={() => upVoteArticle()}>Add Upvote</button>
      <p>This post has been upvoted {upvotes}</p>
    </div>
  );
};

export default UpvotesSection;
