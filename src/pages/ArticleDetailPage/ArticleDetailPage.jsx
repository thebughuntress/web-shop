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
import cardImgPlaceholder from "../../assets/images/card-img-placeholder.png";

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

  return (
    <Box sx={{ paddingTop: 4 }}>
      {article ? (
        <Card sx={{ maxWidth: 600, margin: "auto" }}>
          <CardMedia
            component="img"
            height="250"
            image={article.imageUrl || cardImgPlaceholder}
            alt={article.name}
          />
          <CardContent>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2, color: "primary.dark" }}
            >
              {article.name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              {article.description}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1, color: "green" }}>
              Price: {article.price} €
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Category: {article.category}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: "primary.light" }}>
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
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button sx={{ marginTop: 4 }} onClick={() => navigate("/articles")}>
          Back to all Articles
        </Button>
      </Box>
    </Box>
  );
}

export default ArticleDetailPage;
