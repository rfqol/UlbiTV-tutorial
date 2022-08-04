import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";

export default function Post() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading] = useFetching(async id => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isCommentsLoading] = useFetching(async id => {
    const response = await PostService.getCommentsById(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <>
      <h1>You opened a post with an ID {params.id}</h1>
      {isLoading ? (
        <CircularProgress
          disableShrink
          style={{ display: "flex", marginInline: "auto" }}
        />
      ) : (
        <h2>
          {post.id}. {post.title}
        </h2>
      )}
      <h2>Commments</h2>
      {isCommentsLoading ? (
        <CircularProgress
          disableShrink
          style={{ display: "flex", marginInline: "auto" }}
        />
      ) : (
        <div>
          {comments.map(comment => (
            <div key={comment.email} style={{ marginTop: "15px" }}>
              <h5>{comment.email}</h5>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
