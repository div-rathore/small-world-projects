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

const editNode = (tree, nodeId, updatedContent)=>{
return tree.map((node)=>{
    if(node.id===nodeId){
return{
    ...node, content: updatedContent, timestamp: new Date().toISOString()
}
    }else if (node.replies && node.replies.length>0){
        return{
            ...node, replies:editNode(node.replies, nodeId, updatedContent)
        }
    }
    return node;
})
}

  const editComment = (commentId, updatedContent) => {
    setComments((prev)=> editNode(prev, commentId,updatedContent))

  }

  const deleteComment = ()=>{

  }

  return {
    comments,
    insertComment,
    editComment,
    deleteComment
  };
};

export default useCommentTree;
