import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/articleSlice";

const PLACEHOLDER_IMAGE =
  "https://cdn.prod.website-files.com/5f2b1efb0f881760ffdc5c96/63c12849a1c7e9df64c819fc_programming-languages-shutterstock-1680857539.webp";

function ArticleCard({ article }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: article.id, quantity: 1 }));
    console.log("Added to cart: ", article.name);
  };

  const handleViewDetails = () => {
    navigate(`/article/${article.id}`);
  };

  return (
    <Card
      sx={{
        width: "22%",
        height: "280px",
        cursor: "pointer",
        boxShadow: 0,
        p: 1,
      }}
    >
      <CardMedia
        component="img"
        height="45%"
        image={article.imageUrl || PLACEHOLDER_IMAGE}
        alt={article.name}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", paddingTop: 2 }}>
          {article.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${article.price}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button variant="outlined" onClick={handleViewDetails}>
          Details
        </Button>
        <Button variant="contained" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ArticleCard;
