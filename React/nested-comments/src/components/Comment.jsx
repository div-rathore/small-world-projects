import React, { useState } from 'react'


const Comment = ({comment, onSubmitComment}) => {
    const [replyContent, setReplyContent] = useState('')
    const [expand, setExpand] = useState(false)
    const toggleExpand = ()=>{
      
        setExpand(!expand)
    }

    const handleChange = (e) => {
        setReplyContent(e.target.value);
      };

      const handleReplySubmit = () => {
        if(replyContent){
            onSubmitComment(comment.id, replyContent)
            setReplyContent('')
        }
      }
  return (
    <div className='comment'>
        <>
        <p className='comment-content'>{comment.content}</p>
        <p className='comment-info'>Votes: {comment.votes}</p>
        <p className='comment-info'>{new Date(comment.timestamp).toLocaleString()}</p>
        </>

        <div className="comment-actions">
            <button className="comment-button" onClick={toggleExpand}>
                {expand?'Hide Replies':'Reply'}
            </button>
            <button className="comment-button">
                Edit
            </button>
            <button className="comment-button">
                Delete
            </button>
            
        </div>
        {expand && <div className="comment-replies">
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
      {comment?.replies?.map((reply)=>{
        return  <Comment key={reply.id} comment={reply} onSubmitComment={onSubmitComment}/>
      })}
     
        </div> }
    </div>
  )
}

export default Comment