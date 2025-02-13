    import React from 'react';
    import CommentsContainer from './CommentsContainer';

    const CommentList = ({ comments }) => (
    <div>
        {comments.map((comment,index) => (
        <div key={index}> {/* Assuming each comment has an id */}
            <CommentsContainer item={comment} />
            <div className="pl-5 border-l-black ml-5">
            {Array.isArray(comment.replies) && comment.replies.length > 0 && <CommentList comments={comment.replies} />}
            </div>
        </div>
        ))}
    </div>
    );

    export default CommentList;
