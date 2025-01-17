import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/articleSlice";
import cardImgPlaceholder from "../../assets/images/card-img-placeholder.png";

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
        width: { xs: "100%", md: "20%" },
        height: "320px",
        cursor: "pointer",
        boxShadow: 0,
        p: 1,
        m: 1,
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
      <CardContent sx={{ textAlign: "center", m: 0, p: 0 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", paddingTop: 0, m: 0 }}
        >
          {article.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.price} €
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button variant="outlined" size="small" onClick={handleViewDetails}>
          Details
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={handleAddToCart}
          // startIcon={<AddIcon />}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ArticleCard;
