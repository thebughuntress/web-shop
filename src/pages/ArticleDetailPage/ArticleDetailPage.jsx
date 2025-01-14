import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import articlesData from "../../db/articles.json";

function ArticleDetailPage() {
  const navigate = useNavigate();

  // Get the articleId from the URL
  const { articleId } = useParams();

  // Find the article by ID
  const article = articlesData.articles.find(
    (art) => art.id === parseInt(articleId)
  );

  // Function to handle navigating back to the home page
  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <Box sx={{ padding: 2}}>
      <Typography variant="h5" sx={{ color: "red", fontWeight: "bold" }}>
        TODO: Article Details
      </Typography>

      {article && (
        <Typography variant="h4" sx={{ marginY: 4 }}>
          {article.name}
        </Typography>
      )}
      <Button sx={{ m: 2 }} onClick={handleBackToHome}>
        Back to home
      </Button>
    </Box>
  );
}

export default ArticleDetailPage;
