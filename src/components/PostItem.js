import React from "react";

function PostHeader({ author, date }) {
  const { name, avatar } = author;
  return (
    <div className="post-header">
      <img src={avatar} alt="Author profile avatar" className="avatar" />
      <div className="informations">
        <span>{name}</span>
        <span>{date}</span>
      </div>
      {/* informations */}
    </div> // post-header
  );
}

function PostItem({ author, date, content, comments }) {
  {
    return (
      <div className="post">
        <PostHeader author={author} date={date} />
        <p className="post-content">{content}</p>
        <PostComments comments={comments} />
      </div>
    );
  }
}

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="line-separator">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <PostCommentHeader comment={comment} />
            <p>{comment.content}</p>
          </div> // comment
        ))}
      </div>
      {/* line-separator */}
    </div> // post-comments
  );
}

function PostCommentHeader({ comment }) {
  const { author } = comment;
  return (
    <div className="post-comment-header">
      <img
        src={author.avatar}
        alt="Commenter's avatar"
        className="commenter-avatar"
      />
      <span>{author.name}</span>
    </div> // post-comment-header
  );
}

export default PostItem;
