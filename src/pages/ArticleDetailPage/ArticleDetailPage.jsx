import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import articlesData from "../../db/articles.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/articleSlice";
import cardImgPlaceholder from "../../assets/images/card-img-placeholder.png";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

function ArticleDetailPage() {
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: article.id, quantity }));
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
        <Card sx={{ maxWidth: 800, margin: "auto", display: "flex" }}>
          {/* Left side for image */}
          <CardMedia
            component="img"
            sx={{ width: "40%", objectFit: "cover" }}
            image={article.imageUrl || cardImgPlaceholder}
            alt={article.name}
          />

          {/* Right side for content */}
          <Box
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              width: "60%",
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
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
              <Typography
                variant="body2"
                sx={{ mb: 1, color: "primary.light" }}
              >
                Stock: {article.stock} available
              </Typography>
            </CardContent>

            <CardActions
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Quantity
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={quantity}
                    label="Quantity"
                    onChange={(event) => setQuantity(event.target.value)}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </Box>
            </CardActions>
          </Box>
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
