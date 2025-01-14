import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const PLACEHOLDER_IMAGE =
  "https://cdn.prod.website-files.com/5f2b1efb0f881760ffdc5c96/63c12849a1c7e9df64c819fc_programming-languages-shutterstock-1680857539.webp";

function ArticleCard({ article }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    console.log("Added to cart:" + article.name);
  };

  const handleViewDetails = () => {
    navigate(`/article/${article.id}`);
  };

  return (
    <Card
      sx={{ width: "20%", height: "40vh", cursor: "pointer", boxShadow: 3 }}
    >
      <CardMedia
        component="img"
        height="45%"
        image={article.imageUrl || PLACEHOLDER_IMAGE}
        alt={article.name}
      />
      <CardContent sx={{ height: "35%", m: 0, p: 0, textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", paddingTop: 2 }}>
          {article.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${article.price}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "20%",
          m: 0,
          p: 0,
        }}
      >
        <Button size="small" variant="contained" onClick={handleViewDetails}>
          View Details
        </Button>
        <Button size="small" variant="contained" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ArticleCard;
