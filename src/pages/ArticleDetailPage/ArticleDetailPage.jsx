import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import articlesData from "../../db/articles.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/articleSlice";

function ArticleDetailPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const PLACEHOLDER_IMAGE =
    "https://cdn.prod.website-files.com/5f2b1efb0f881760ffdc5c96/63c12849a1c7e9df64c819fc_programming-languages-shutterstock-1680857539.webp";

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
    <Box sx={{ paddingX: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
         
        }}
      >
        <Button
          sx={{ marginTop: 2 }}
          onClick={handleBackToHome}
          variant="outlined"
        >
          Back to Home
        </Button>
      </Box>
      {article ? (
        <Card sx={{ maxWidth: 600, margin: "auto" }}>
          <CardMedia
            component="img"
            height="250"
            image={article.imageUrl || PLACEHOLDER_IMAGE}
            alt={article.name}
          />
          <CardContent>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2, color: "primary.dark" }}
            >
              {article.name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {article.description}
            </Typography>
            <Typography variant="h6" sx={{ mb: 2, color: "green" }}>
              Price: ${article.price}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Category: {article.category}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "primary.light" }}>
              Stock: {article.stock} available
            </Typography>
            <CardActions sx={{ display: "flex", justifyContent: "end" }}>
              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6" color="error" textAlign="center">
          Article not found!
        </Typography>
      )}
    </Box>
  );
}

export default ArticleDetailPage;
