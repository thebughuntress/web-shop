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
import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageButton from "../LanguageButton/LanguageButton";
import ArticleSearch from "../ArticleSearch/ArticleSearch";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { setCategory } from "../../store/categorySlice";

export default function AppBar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // Access the selected category from Redux
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  const categories = [
    { label: `${t("all-articles")}`, key: "all-articles" },
    { label: "Programming", key: "programming" },
    { label: "Productivity", key: "productivity" },
    { label: "Web Development", key: "web-development" },
    { label: "Database", key: "database" },
    { label: "Data Science", key: "data-science" },
    { label: "Mobile Development", key: "mobile-development" },
  ];

  const handleCategoryClick = (categoryKey) => {
    dispatch(setCategory(categoryKey));

    if (categoryKey === "all-articles") {
      navigate("/articles");
    } else {
      navigate(`/articles#${categoryKey.toLowerCase().replace(/ /g, "-")}`);
    }
  };

  // Effect to run when the route changes
  React.useEffect(() => {
    if (location.pathname !== "/articles") {
      dispatch(setCategory(""));
    }
  }, [location, dispatch]);

  return (
    <Box sx={{ flexGrow: 1, textAlign: "start" }}>
      <MuiAppBar position="static">
        <Toolbar
          sx={{
            height: { xs: "70px", md: "85px" },
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
                sx={{
                  marginLeft: 1,
                  fontWeight: 600,
                  fontSize: { xs: "20px", md: "24px" },
                }}
              >
                webshop.com
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "center",
              alignItems: "center",
              width: "33%",
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
              sx={{
                fontSize: "18px",
                display: { xs: "none", md: "flex" },
                color:
                  location.pathname == "/cart" ? "secondary.main" : "white",
              }}
              startIcon={<ShoppingCartIcon />}
              onClick={() => navigate("/cart")}
            >
              {t("cart")}
            </Button>

            <IconButton
              sx={{
                fontSize: "24px",
                display: { xs: "block", md: "none" },

                color:
                  location.pathname == "/cart" ? "secondary.main" : "white",
              }}
              onClick={() => navigate("/cart")}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>

        {/* ArticleSearch for mobile */}
        <Toolbar
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            height: "50px",
            backgroundColor: "primary.main",
            justifyContent: "center",
            alignItems: "center",
            p: 4,
          }}
        >
          <ArticleSearch />
        </Toolbar>

        <Toolbar
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
            height: {
              xs: "40px",
              md: "60px",
            },
          }}
        >
          {categories.map(({ label, key }) => (
            <Button
              key={key}
              color="inherit"
              onClick={() => handleCategoryClick(key)}
              sx={{
                height: "100%",
                borderRadius: 0,
                borderBottom:
                  selectedCategory === key ? "4px solid white" : "none",
                fontWeight: selectedCategory === key ? "bold" : "normal",
              }}
            >
              {label}
            </Button>
          ))}
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
