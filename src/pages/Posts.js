import {
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import PostService from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import "../styles/App.css";
import { getPageCount } from "../utils/pages";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();
  const observer = useRef();

  const [fetchPosts, isPostsLoading] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    if (isPostsLoading) return;
    if (observer.current) observer.current.disconnect();
    const callback = entries => {
      if (entries[0].isIntersecting && page < totalPages) {
        setPage(page + 1);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isPostsLoading]);

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  const changePage = page => {
    setPage(page);
  };

  const addNewPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const changeLimit = limit => {
    setLimit(limit);
  };

  return (
    <div className="App">
      <Container maxWidth="lg">
        <PostFilter
          filter={filter}
          setFilter={setFilter}
          limit={limit}
          changeLimit={changeLimit}
        />
        <PostForm addNewPost={addNewPost} />
        <PostList
          posts={searchedAndSortedPosts}
          removePost={removePost}
          title="Posts List"
        />
        {isPostsLoading && (
          <CircularProgress
            disableShrink
            style={{ display: "flex", marginInline: "auto" }}
          />
        )}
        <div ref={lastElement} style={{ height: "100px" }} />
        {/* <Pagination
          count={totalPages}
          color="primary"
          onChange={(event, page) => changePage(page)}
        /> */}
      </Container>
    </div>
  );
}

export default Posts;
