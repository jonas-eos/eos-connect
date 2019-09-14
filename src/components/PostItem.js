/**
 * @overview Post item
 * This file manipulate all posts and comments.
 *
 * @requires react
 */
import React from "react";

/**
 * @method PostHeader
 *
 * @description
 * This method show username, avatar and the post date.
 *
 * @param {object} author
 * @param {object} date
 *
 * @return post header formatted
 */
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

/**
 * @method PostItem
 *
 * @description
 * This method show the post, and call other functions to show the reader and
 * comments.
 *
 * @param {object} author
 * @param {object} date
 * @param {object} content
 * @param {object} comments
 *
 * @return The post with header and comments
 */
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

/**
 * @method PostComments
 *
 * @description
 * This method shows all post comments, with author name and author avatar.
 *
 * @param {object comments}
 *
 * @return post comments
 */
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
