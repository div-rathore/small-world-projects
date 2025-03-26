import React, { useState } from "react";

const useCommentTree = (initialComments) => {
  const [comments, setComments] = useState(initialComments);

  const insertNode = (tree, commentId, content) => {
    return tree.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, content],
        };
      }else if(comment.replies && comment.replies.length> 0){
        return {
            ...comment,
            replies: insertNode(comment.replies,commentId, content)
          };
      }
      return comment;
    });
  };

  const insertComment = (commentId, content) => {
    const newComment = {
      id: Date.now(),
      content,
      votes: 0,
      timstamp: new Date().toISOString(),
      replies: [],
    };
    if (commentId) {
      setComments((prev) => insertNode(prev, commentId, newComment));
    } else {
      setComments((prev) => [newComment, ...prev]);
    }
  };

  return {
    comments,
    insertComment
  };
};

export default useCommentTree;
