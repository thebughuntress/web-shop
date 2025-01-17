import { Box, Typography } from "@mui/material";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import articlesData from "../../db/articles.json";

function Home() {
  return (
    <Box>
      <Box
        sx={{
          background: "linear-gradient(to right, lightyellow, white)",
          height: { xs: "25vh", md: "40vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h3" sx={{ fontSize: { xs: "40px", md: "50px" } }}>
          Welcome to <b>webshop.com</b>
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 300 }}>
          Shop Smart, Shop Better!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "75%", mt: 2 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              color: "primary.light",
              textAlign: "left",
            }}
          >
            Top Picks
          </Typography>
        </Box>

        <Box
          sx={{
            margin: 2,
            display: "flex",
            flexWrap: "wrap",
            rowGap: 2,
            columnGap: 1,
            justifyContent: "space-around",
          }}
        >
          {articlesData.articles.slice(0, 4).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
