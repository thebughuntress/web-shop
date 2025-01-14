import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import articlesData from "../../db/articles.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/articleSlice";

function ArticleDetailPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: article.id, quantity: 1 }));
    console.log("Added to cart: ", article.name);
  };

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
    <Box sx={{ padding: 2 }}>
      <Button sx={{ m: 2 }} onClick={handleBackToHome}>
        Back to home
      </Button>
      <Typography variant="h5" sx={{ color: "red", fontWeight: "bold" }}>
        TODO: Article Details
      </Typography>

      {article && (
        <Box>
          <Typography variant="h4" sx={{ marginY: 4 }}>
            {article.name}
          </Typography>
          <Button size="small" variant="contained" onClick={handleAddToCart}>
            Add to cart
          </Button>{" "}
        </Box>
      )}
    </Box>
  );
}

export default ArticleDetailPage;
