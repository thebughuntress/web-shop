import React from "react";
import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "primary.dark",
        color: "#fff",
        padding: "20px",
        mt: 4,
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2" sx={{ marginBottom: 1 }}>
        Created with ❤️ using{" "}
        <Link
          href="https://vitejs.dev/"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          Vite
        </Link>
        ,{" "}
        <Link
          href="https://react.dev/"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          React
        </Link>
        , and{" "}
        <Link
          href="https://mui.com/"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          Material-UI
        </Link>
        .
      </Typography>
      <Typography variant="body2">
        Icons by{" "}
        <Link
          href="https://icons8.com/"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          icons8
        </Link>
      
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "center", marginTop: 2 }}>
        &copy; {new Date().getFullYear()} WebShop. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
