import React, { useState, useEffect } from 'react';
import Comment from './Comment';

import { getCommentsData } from '../../data/comments';
import CommentForm from './CommentForm';

const CommentsContainer = ({ className, loggedInUserId, comments }) => {
	const [affectedComment, setAffectedComment] = useState(null);

	const addCommentHandler = (value, parent = null, replyOnUser = null) => {
        setAffectedComment(null);
	};

    const updateCommentHandler = (value, commentId) => {
        setAffectedComment(null);
    };

    const deleteCommentHandler = (commentId) => {
    };

	return (
		<div className={`${className}`}>
			<CommentForm
				btnLabel="Send"
				formSubmitHandler={(value) => addCommentHandler(value)}
			/>
			<div className="space-y-4 mt-8">
				{comments.map((comment) => (
					<Comment
                        key={comment._id}
						comment={comment}
						loggedInUserId={loggedInUserId}
						affectedComment={affectedComment}
						setAffectedComment={setAffectedComment}
						addComment={addCommentHandler}
                        updateComment={updateCommentHandler}
                        deleteComment={deleteCommentHandler}
                        replies={comment.replies}
					/>
				))}
			</div>
		</div>
	);
};

export default CommentsContainer;
