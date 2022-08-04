import { Button, TextField } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context";

export default function Login() {
  const { setIsAuth } = useContext(AuthContext);
  const login = e => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Log In</h1>
      <form className="login" onSubmit={login}>
        <TextField
          style={{ marginBottom: "1rem" }}
          label="Email"
          variant="outlined"
        />
        <TextField
          style={{ marginBottom: "1.5rem", display: "block" }}
          label="Password"
          variant="outlined"
          type="password"
        />
        <Button variant="contained" type="submit">
          Log In
        </Button>
      </form>
    </>
  );
}
