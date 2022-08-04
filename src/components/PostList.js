import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Post from "./Post";

export default function PostList({ posts, title, removePost }) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        {posts.length ? title : "No Posts"}
      </h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <Post post={post} number={index + 1} removePost={removePost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}
