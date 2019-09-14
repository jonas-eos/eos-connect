import React from "react";

function PostItem({ author, date, content, comments }) {
  {
    return (
      <div className="post">
        <p key={author.name}>{author.name}</p>
        <p>{author.avatar}</p>
        <p>{date}</p>

        <div className="content">
          <p>{content}</p>
        </div>

        <div className="comments">
          {comments.map(comment => (
            <div key={comment.id} className="comment">
              <p>{comment.author.name}</p>
              <p>{comment.author.avatar}</p>
              <p>{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PostItem;
