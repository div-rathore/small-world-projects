import React, { useState } from "react";
import "./style.css";
import useCommentTree from "../hooks/useCommentTree";
import Comment from "./Comment";

const NestedComments = ({ comments=[], onSubmit, onEdit, onDelete }) => {
  const [comment, setComment] = useState("");
  const { comments: commentsData , insertComment} = useCommentTree(comments);
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = () => {
    if (comment) {
        handleReply(undefined, comment)
      setComment("");
    }
  };
  const handleReply = (commentId,content) => {
    insertComment(commentId,content)
  };
  return (
    <>
      <div className="add-comment">
        <textarea
          onChange={handleChange}
          className="comment-textarea"
          value={comment}
          rows={3}
          cols={50}
          placeholder="Add a comment"
        />
        <button className="comment-button" onClick={handleSubmit}>
          Add Comment
        </button>
      </div>

      {/* Nested Comments */}
      {commentsData?.map((comment) => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            onSubmitComment={handleReply}
          />
        );
      })}
    </>
  );
};

export default NestedComments;
