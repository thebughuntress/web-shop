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
import cardImgPlaceholder from "../../assets/images/card-img-placeholder.png"


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
        height: "310px",
        cursor: "pointer",
        boxShadow: 0,
        p: 1,
        display: "flex",
        flexDirection: "column", // Ensures content stacks vertically
        justifyContent: "space-between", // Space between content and actions
      }}
    >
      <CardMedia
        component="img"
        height="45%"
        image={article.imageUrl || cardImgPlaceholder}
        alt={article.name}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", paddingTop: 0 }}>
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