/**
 * @overview post list
 * This file manipulate post list content
 *
 * @requires react
 *
 * @requires components/PostItem
 */
import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  /**
   * @state
   *
   * @static
   */
  state = {
    posts: [
      {
        id: 0,
        author: {
          name: "Jonas",
          avatar:
            "https://avatars2.githubusercontent.com/u/21954359?s=400&u=b529b11364b42e3468adc953dbfb8ee81f6274a9&v=4"
        },
        date: "11 Sep 2019",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis nisl, varius facilisis luctus ut, suscipit sed nibh. Aenean nisi ex, sollicitudin eu erat ac, tempus varius nunc. Donec vestibulum justo sit amet tellus interdum tempor. Mauris efficitur imperdiet felis et lobortis. Aliquam ut elementum urna, molestie posuere magna. Nunc in arcu vitae nulla commodo rhoncus nec ac ligula. Vestibulum cursus mauris massa. Donec varius neque lectus, in rhoncus elit volutpat eget. Aliquam semper ligula quam, ac tempor risus convallis non. Aenean vestibulum porttitor lectus, vel convallis velit aliquet eget.",
        comments: []
      },
      {
        id: 1,
        author: {
          name: "Jonas",
          avatar:
            "https://avatars2.githubusercontent.com/u/21954359?s=400&u=b529b11364b42e3468adc953dbfb8ee81f6274a9&v=4"
        },
        date: "12 Sep 2019",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis nisl, varius facilisis luctus ut, suscipit sed nibh. Aenean nisi ex, sollicitudin eu erat ac, tempus varius nunc. Donec vestibulum justo sit amet tellus interdum tempor. Mauris efficitur imperdiet felis et lobortis. Aliquam ut elementum urna, molestie posuere magna. Nunc in arcu vitae nulla commodo rhoncus nec ac ligula. Vestibulum cursus mauris massa. Donec varius neque lectus, in rhoncus elit volutpat eget. Aliquam semper ligula quam, ac tempor risus convallis non. Aenean vestibulum porttitor lectus, vel convallis velit aliquet eget.",
        comments: [
          {
            id: 1,
            author: {
              name: "Person 1",
              avatar: "https://static.thenounproject.com/png/770826-200.png"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis."
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "Jonas",
          avatar:
            "https://avatars2.githubusercontent.com/u/21954359?s=400&u=b529b11364b42e3468adc953dbfb8ee81f6274a9&v=4"
        },
        date: "13 Sep 2019",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis nisl, varius facilisis luctus ut, suscipit sed nibh. Aenean nisi ex, sollicitudin eu erat ac, tempus varius nunc. Donec vestibulum justo sit amet tellus interdum tempor. Mauris efficitur imperdiet felis et lobortis. Aliquam ut elementum urna, molestie posuere magna. Nunc in arcu vitae nulla commodo rhoncus nec ac ligula. Vestibulum cursus mauris massa. Donec varius neque lectus, in rhoncus elit volutpat eget. Aliquam semper ligula quam, ac tempor risus convallis non. Aenean vestibulum porttitor lectus, vel convallis velit aliquet eget.",
        comments: [
          {
            id: 1,
            author: {
              name: "Person 1",
              avatar: "https://static.thenounproject.com/png/770826-200.png"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis."
          },
          {
            id: 2,
            author: {
              name: "Person 2",
              avatar: "https://static.thenounproject.com/png/770826-200.png"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis."
          },
          {
            id: 3,
            author: {
              name: "Jonas",
              avatar:
                "https://avatars2.githubusercontent.com/u/21954359?s=400&u=b529b11364b42e3468adc953dbfb8ee81f6274a9&v=4"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis."
          }
        ]
      }
    ]
  };

  /**
   * @render
   *
   * @return PostItem
   */
  render() {
    const { posts } = this.state;

    return (
      <div className="post-list">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
