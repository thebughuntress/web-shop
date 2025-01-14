import { Box } from "@mui/material";
import AllArticlesPage from "../AllArticlesPage/AllArticlesPage";

function Home() {
  return (
    <Box>
      <Box sx={{padding: 5}}>
        <AllArticlesPage />
      </Box>
    </Box>
  );
}

export default Home;
