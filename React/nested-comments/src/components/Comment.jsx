import React, { useState } from "react";

const Comment = ({ comment, onSubmitComment, onEditComment }) => {
  const [replyContent, setReplyContent] = useState("");
  const [expand, setExpand] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);
  const toggleExpand = () => {
    setExpand(!expand);
  };

  const handleChange = (e) => {
    if (!editToggle) setReplyContent(e.target.value);
    else setEditedContent(e.target.value);
  };

  const handleReplySubmit = () => {
    if (replyContent) {
      onSubmitComment(comment.id, replyContent);
      setReplyContent("");
    }
  };
  const handleEditSubmit = () => {
 
      onEditComment(comment.id, editedContent);
      setEditToggle(false);
    
  };
  const handleEditToggle = () => {
    setEditToggle(!editToggle);
    setEditedContent(comment.content);
  };
  return (
    <div className="comment">
      {!editToggle ? (
        <>
          <p className="comment-content">{comment.content}</p>
          <p className="comment-info">Votes: {comment.votes}</p>
          <p className="comment-info">
            {new Date(comment.timestamp).toLocaleString()}
          </p>
        </>
      ) : (
        <div className="add-comment">
          <textarea
            onChange={handleChange}
            className="comment-textarea"
            value={editedContent}
            rows={3}
            cols={50}
          />
          <button className="comment-button" onClick={handleEditSubmit}>
            Save Edit
          </button>
          <button className="comment-button" onClick={handleEditToggle}>
            Cancel Edit
          </button>
        </div>
      )}

      <div className="comment-actions">
        <button className="comment-button" onClick={toggleExpand}>
          {expand ? "Hide Replies" : "Reply"}
        </button>
        <button className="comment-button" onClick={handleEditToggle}>
          Edit
        </button>
        <button className="comment-button">Delete</button>
      </div>
      {expand && (
        <div className="comment-replies">
          <div className="add-comment">
            <textarea
              onChange={handleChange}
              className="comment-textarea"
              value={replyContent}
              rows={3}
              cols={50}
              placeholder="Add a comment"
            />
            <button className="comment-button" onClick={handleReplySubmit}>
              Add Comment
            </button>
          </div>
          {comment?.replies?.map((reply) => {
            return (
              <Comment
                key={reply.id}
                comment={reply}
                onSubmitComment={onSubmitComment}
                onEditComment={onEditComment}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comment;
