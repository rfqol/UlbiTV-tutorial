import { Button, Container } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";

export default function Navigation() {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <nav className="nav" style={{ marginBottom: "20px" }}>
      <Container maxWidth="lg">
        <ul className="links">
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="posts">Posts</Link>
          </li>
        </ul>
        <Button onClick={logout} variant="text" type="submit">
          Log Out
        </Button>
      </Container>
    </nav>
  );
}
