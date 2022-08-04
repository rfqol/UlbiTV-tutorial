import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Post(props) {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <h2 className="post__title">
          {props.post.id}. {props.post.title}
        </h2>
        <p>{props.post.body}</p>
      </div>
      <div className="post__controls">
        <Button
          variant="outlined"
          sx={{
            marginRight: "0.7rem",
          }}
          onClick={() => navigate(`/posts/${props.post.id}`)}
        >
          Open
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => props.removePost(props.post)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
