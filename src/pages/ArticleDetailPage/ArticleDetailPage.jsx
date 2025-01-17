import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import cardImgPlaceholder from "../../assets/images/card-img-placeholder.png";
import { addToCart } from "../../store/articleSlice";
import { getArticleById } from "../../api";

function ArticleDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State to handle errors

  // Get the articleId from the URL
  const { articleId } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      if (!articleId) return;
      setLoading(true); // Start loading
      setError(null); // Reset error state
      try {
        const el = await getArticleById(articleId);
        setArticle(el);
      } catch (error) {
        console.error(`Error fetching article with id ${articleId}:`, error);
        setError("Failed to load article. Please try again later.");
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchArticle();
  }, [articleId]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: article.id, quantity }));
    console.log("Added to cart: ", article.name);
  };

  return (
    <Box sx={{ paddingTop: 4, m: 2 }}>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography variant="h6" color="error" textAlign="center">
          {error}
        </Typography>
      ) : article ? (
        <Card
          sx={{
            maxWidth: 800,
            margin: "auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            boxShadow: 3,
          }}
        >
          {/* Left side for image */}
          <CardMedia
            component="img"
            sx={{
              width: { xs: "100%", md: "40%" },
              objectFit: "cover",
              height: { xs: 200, md: "auto" },
            }}
            image={article.imageUrl || cardImgPlaceholder}
            alt={article.name}
          />

          {/* Right side for content */}
          <Box
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", md: "60%" },
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: "primary.dark",
                  fontSize: { xs: "24px", md: "32px" },
                }}
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
                flexDirection: { xs: "column", md: "row" },
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  width: "100%",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
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
