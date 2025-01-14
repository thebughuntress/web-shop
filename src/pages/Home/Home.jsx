import { Box, Typography } from "@mui/material";
import AllArticlesPage from "../AllArticlesPage/AllArticlesPage";

function Home() {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: "50px",
          fontWeight: 600,
          textAlign: "center",
          marginY: 5,
        }}
      >
        Welcome to the WebShop
      </Typography>
      <AllArticlesPage />
    </Box>
  );
}

export default Home;
