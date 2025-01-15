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
import Search from "../Search/Search";

export default function AppBar() {
  const navigate = useNavigate();

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

          {/* Simplified Search */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "33%",
            }}
          >
            <Search />
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
          <Button color="inherit" onClick={() => navigate("/articles")}>
            All Articles
          </Button>
          <Button color="inherit" href="#web-development">
            Web Development
          </Button>
          <Button color="inherit" href="#data-science">
            Data Science
          </Button>
          <Button color="inherit" href="#mobile-development">
            Mobile Development
          </Button>
          <Button color="inherit" href="#ai-ml">
            AI/ML
          </Button>
          <Button color="inherit" href="#cybersecurity">
            Cybersecurity
          </Button>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
