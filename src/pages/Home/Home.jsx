import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

function Home() {
  const [numberOfArticles, setNumberOfArticles] = useState(4);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getArticles();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const handleShowMore = () => {
    setNumberOfArticles((prev) => prev + 4);
  };

  const allArticlesVisible = numberOfArticles >= articles.length;

  return (
    articles.length > 0 && (
      <Box>
        {/* Header Section */}
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
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "28px", md: "50px" } }}
          >
            Welcome to <b>webshop.com</b>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 300,
              mt: 1,
              fontSize: { xs: "14px", md: "28px" },
            }}
          >
            Shop Smart, Shop Better!
          </Typography>
        </Box>

        {/* Articles Section */}

        <Box
          sx={{
            marginY: 2,
            marginX: { xs: 5, md: "340px" },
            display: "flex",
            flexWrap: "wrap",
            rowGap: 5,
            columnGap: 1,
            justifyContent: "space-between",
            paddingTop: 5,
          }}
        >
          {articles.slice(0, numberOfArticles).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </Box>

        {/* Show More Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 5,
          }}
        >
          <Button onClick={handleShowMore} disabled={allArticlesVisible}>
            {allArticlesVisible ? "All Articles Shown" : "Show More Articles"}
          </Button>
        </Box>
      </Box>
    )
  );
}

export default Home;
