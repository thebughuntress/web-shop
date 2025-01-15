import { Box, Typography } from "@mui/material";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import articlesData from "../../db/articles.json";

function Home() {
  return (
    <Box>
      <Box
        sx={{
          background: "linear-gradient(to right, lightyellow, white)",
          height: "20vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h3">
          Welcome to <b>webshop.com</b>
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 300 }}>
          Shop Smart, Shop Better!
        </Typography>
      </Box>
      <Box
        sx={{
          m: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { md: "90%", xl: "75%" },
            display: "flex",
            flexDirection: "column",
            marginY: 1,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              color: "primary.light",
              textAlign: "left",
              marginBottom: 2,
            }}
          >
            Top Picks Today
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {articlesData.articles.slice(0, 4).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
