import React, { useEffect, useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("todo..." + searchText);
  }, [searchText]);

  return (
    <TextField
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ marginRight: 1 }} />
          </InputAdornment>
        ),
      }}
      sx={{
        backgroundColor: "white",
        borderRadius: "4px",
        width: "20vw",
      }}
      placeholder="Search..."
    />
  );
};

export default Search;
