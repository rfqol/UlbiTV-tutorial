import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

export default function PostFilter({ filter, setFilter, limit, changeLimit }) {
  return (
    <div className="controls">
      <FormControl>
        <InputLabel>Sort</InputLabel>
        <Select
          value={filter.sort}
          label="Sort"
          onChange={e => setFilter({ ...filter, sort: e.target.value })}
          style={{ width: "100px" }}
        >
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="body">Text</MenuItem>
        </Select>
      </FormControl>
      <TextField
        autoComplete="off"
        label="Search"
        variant="outlined"
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
      />
      <FormControl>
        <InputLabel>Posts Quantity</InputLabel>
        <Select
          value={limit}
          label="Posts Quantity"
          onChange={e => changeLimit(e.target.value)}
          sx={{ width: "120px" }}
        >
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={25}>Twenty-five</MenuItem>
          <MenuItem value={-1}>Show All</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
