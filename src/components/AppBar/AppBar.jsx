import * as React from "react";
import { AppBar as MuiAppBar } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import shopIcon from "../../assets/icons/icons8-shop-100.png";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function AppBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            onClick={() => navigate("/")}
          >
            <img
              src={shopIcon}
              alt="shop icon"
              style={{ width: 30, height: 30 }}
            />{" "}
          </IconButton>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            WebShop
          </Typography>
          <Button
            color="inherit"
            startIcon={<ShoppingCartIcon />}
            onClick={() => navigate("/cart")}
          >
            Go to Cart
          </Button>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
