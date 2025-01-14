import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import articlesData from "../../db/articles.json";
import {
  addToCart,
  reduceQuantityOfArticleInCart,
} from "../../store/articleSlice";

const CartPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [grandTotal, setGrandTotal] = useState();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.articles.cart);

  const handleIncreaseQuantity = (id) => {
    dispatch(addToCart({ id, quantity: 1 }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(reduceQuantityOfArticleInCart({ id, quantity: 1 }));
  };

  useEffect(() => {
    setError(null);
    setLoading(true);

    try {
      console.log(cartItems);

      // Map cartItems to include article details
      const elements = cartItems
        .map((cartItem) => {
          const article = articlesData.articles.find(
            (article) => article.id === cartItem.id
          );
          if (article) {
            return {
              article: article,
              quantity: cartItem.quantity,
              total: article.price * cartItem.quantity,
            };
          }
          return null;
        })
        .filter((item) => item !== null);

      setArticles(elements);
    } catch (err) {
      console.error("Error processing cart items:", err);
      setError("Failed to process cart items.");
    } finally {
      setLoading(false);
    }
  }, [cartItems, articlesData]);

  useEffect(() => {
    // Calculate the grand total
    if (articles.length > 0) {
      const total = articles.reduce((acc, item) => acc + item.total, 0);

      setGrandTotal(total);
    }
  }, [articles]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: "primary.dark", fontWeight: "bold", marginY: 2 }}
      >
        Shopping Cart
      </Typography>

      {articles.length === 0 && (
        <Typography
          sx={{
            color: "primary.light",
            textAlign: "center",
            marginTop: 2,
            fontStyle: "italic",
          }}
        >
          No items in cart!
        </Typography>
      )}

      {articles.length > 0 && (
        <TableContainer
          component={Paper}
          sx={{
            width: "80%",
            margin: "auto",
            backgroundColor: "#f5f5f5",
            padding: 2,
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Article
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="subtitle1" fontWeight="bold">
                    Price
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="subtitle1" fontWeight="bold">
                    Quantity
                  </Typography>
                </TableCell>
                <TableCell align="right" sx={{ width: "150px" }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Total
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {articles.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <b>{item.article.name}</b>
                  </TableCell>
                  <TableCell align="center">{item.article.price} €</TableCell>
                  <TableCell align="center">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconButton
                        onClick={() => handleDecreaseQuantity(item.article.id)}
                        disabled={item.quantity <= 1} // Prevent negative quantity
                      >
                        <Remove />
                      </IconButton>
                      <Typography sx={{ marginX: 1 }}>
                        {item.quantity}
                      </Typography>
                      <IconButton
                        onClick={() => handleIncreaseQuantity(item.article.id)}
                      >
                        <Add />
                      </IconButton>
                    </Box>
                  </TableCell>
                   <TableCell align="right" sx={{ width: "150px" }}>
                    {item.total?.toFixed(2)} €
                  </TableCell>
                </TableRow>
              ))}
              {/* Total Line */}
              <TableRow
                sx={{
                  "& td, & th": { border: 0 }, // Remove the border from this row
                }}
              >
                <TableCell colSpan={3} align="right">
                  <Typography fontWeight="bold">Grand Total:</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography fontWeight="bold">
                    {grandTotal?.toFixed(2)} €
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default CartPage;
