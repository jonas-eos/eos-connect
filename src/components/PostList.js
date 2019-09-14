import React, { Component } from "react";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Jonas",
          avatar: "http://shorturl.at/fyM58"
        },
        date: "11 Sep 2019",
        content:
          "Hello guys! Get my first job as a nodeJS dev, I'm so happy *.*",
        comments: [
          {
            id: 1,
            author: {
              name: "Person 1",
              avatar: "http://shorturl.at/opLX4"
            },
            content: "Nice bro! let's go on :p"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;
    console.log(posts);
    return (
      <>
        {posts.map(post => (
          <p key={post.id}>{post.id}</p>
        ))}
      </>
    );
  }
}

export default PostList;
