import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import cardImgPlaceholder from "../../assets/images/card-img-placeholder.png";
import { addToCart } from "../../store/articleSlice";
import { useTranslation } from "react-i18next";

function ArticleCard({ article }) {
  const { t } = useTranslation();
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
        width: { xs: "75%", md: "22%" },
        height: "320px",
        cursor: "pointer",
        boxShadow: 0,
        p: 1,
        m: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
          {t("details")}
        </Button>
        <Button variant="contained" size="small" onClick={handleAddToCart}>
          {t("add-to-cart")}
        </Button>
      </CardActions>
    </Card>
  );
}

export default ArticleCard;
