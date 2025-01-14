import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

const CartPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cartItems = useSelector((state) => state.articles.cart);

  useEffect(() => {
    setError(null);
    setLoading(false);
  }, []);

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ color: "red", fontWeight: "bold", marginY: 2 }}
      >
        TODO: Shopping Cart
      </Typography>
      <Box
        sx={{
          width: "70%",
          minHeight: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          flexDirection: "column",
        }}
      >
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          cartItems.map((item) => (
            <Box key={item.id} sx={{ backgroundColor: "white", m: 2, p: 2 }}>
              <Typography> Article ID: {item.id}</Typography>
              <Typography> Quantity: {item.quantity}</Typography>
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};

export default CartPage;
