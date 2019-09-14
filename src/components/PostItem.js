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
      <div className="line-separator"></div>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img
            src={comment.author.avatar}
            alt="Commenter's avatar"
            className="avatar"
          />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div> // comment
      ))}
      {/* line-separator */}
    </div> // post-comments
  );
}

export default PostItem;
