import React, { useState } from "react";
import { Box, Modal, TextField } from "@mui/material";
import Button from "@mui/material/Button";

export default function PostForm({ addNewPost }) {
  const [post, setPost] = useState({ title: "", text: "" });

  const createPost = e => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    addNewPost(newPost);
    setPost({ title: "", text: "" });
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "#fff",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Create Post
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <form className="post-form">
            <TextField
              autoComplete="off"
              label="Title"
              variant="outlined"
              value={post.title}
              onChange={e => setPost({ ...post, title: e.target.value })}
            />
            <TextField
              autoComplete="off"
              label="Description"
              variant="outlined"
              value={post.text}
              onChange={e => setPost({ ...post, text: e.target.value })}
            />
            <Button variant="contained" type="submit" onClick={createPost}>
              Create
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}
