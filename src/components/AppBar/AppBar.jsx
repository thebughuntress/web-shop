import * as React from "react";
import {
  Box,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import shopIcon from "../../assets/icons/icons8-shopee-100.png";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageButton from "../LanguageButton/LanguageButton";
import ArticleSearch from "../ArticleSearch/ArticleSearch";
import { useDispatch, useSelector } from "react-redux";

import { setCategory } from "../../store/categorySlice";

export default function AppBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Access the selected category from Redux
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  const categories = [
    "All Articles",
    "Programming",
    "Productivity",
    "Web Development",
    "Database",
    "Data Science",
    "Mobile Development",
    "Blockchain",
  ];

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));

    if (category === "All Articles") {
      navigate("/articles");
    } else {
      navigate(`/articles#${category.toLowerCase().replace(/ /g, "-")}`);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: "start" }}>
      <MuiAppBar position="static">
        <Toolbar
          sx={{
            height: "85px",
            backgroundColor: "primary.dark",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              justifyContent: "flex-start",
              alignItems: "center",
              width: "33%",
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <img
                src={shopIcon}
                alt="cart icon"
                style={{ width: 40, height: "auto" }}
              />
              <Typography
                variant="h5"
                sx={{ marginLeft: 2, fontWeight: 600, marginTop: 1 }}
              >
                webshop.com
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "33%",
              //backgroundColor: "blue"
            }}
          >
            <ArticleSearch />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "33%",
            }}
          >
            <LanguageButton />
            <Button
              sx={{ fontSize: "18px" }}
              color="inherit"
              startIcon={<ShoppingCartIcon />}
              onClick={() => navigate("/cart")}
            >
              Cart
            </Button>
          </Box>
        </Toolbar>

        <Toolbar sx={{ backgroundColor: "primary", height: "68px" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {categories.map((category) => (
            <Button
              key={category}
              color="inherit"
              onClick={() => handleCategoryClick(category)}
              sx={{
                height: "100%",
                borderRadius:0,
                borderBottom:
                  selectedCategory === category
                    ? "4px solid white" 
                    : "none",
                paddingBottom: "5px",
                fontWeight: selectedCategory === category ? "bold" : "normal", // Optionally make selected category bold
              }}
            >
              {category}
            </Button>
          ))}
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}