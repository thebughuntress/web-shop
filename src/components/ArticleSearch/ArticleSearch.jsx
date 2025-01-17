import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../../store/articleSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Search = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.articles.searchText);

  const handleSearchChange = (e) => {
    dispatch(setSearchText(e.target.value));
  };

  const handleKeyDown = (e) => {
    // Redirect to /articles when Enter is pressed on the home page
    if (e.key === "Enter") {
      if (location.pathname === "/") {
        navigate("/articles");
      }
    }
  };

  return (
    <TextField
      value={searchText}
      onChange={handleSearchChange}
      onKeyDown={handleKeyDown}
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
        width: "80%",
        height: "50px",
        paddingTop: 0,
        paddingBottom: 0,
        lineHeight: "50px",
      }}
      placeholder={t("search") + "..."}
    />
  );
};

export default Search;
