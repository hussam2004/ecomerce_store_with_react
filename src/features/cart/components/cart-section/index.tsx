// import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import {
  Stack,
  Button,
  TextField,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import { CartTable } from "../cart-table";
import CurrentRoute from "../../../about/components/current-route";
import { useNavigate } from "react-router-dom";

// --- START: MOCK COMPONENTS TO RESOLVE COMPILATION ERRORS ---
// We use Mocks here to make the file runnable in the current environment.
// Replace these with your actual imports for 'CurrentRoute' and 'CartTable'.

// MOCK: Replace with your actual import: import CurrentRoute from "../../../about/components/current-route";
// const CurrentRoute = ({ text }) => (
//   <Typography variant="body2" sx={{ my: 2, color: "text.secondary" }}>
//     {text}
//   </Typography>
// );

// MOCK: Replace with your actual import: import { CartTable } from "../cart-table";
// The mock CartTable must accept the onDataChange prop.
// const CartTable = ({ onDataChange }) => {
//   // NOTE: This mock assumes the parent component (CartSection) handles all empty state logic.
//   // If the cart is empty, this component will not be rendered (checked by the parent).
//   // If it is rendered, it assumes the cart is not empty.
//   return (
//     <Typography
//       sx={{ p: 4, textAlign: "center", border: "1px dashed #ccc", mx: 18 }}
//     >
//       [CartTable Component Placeholder - Not Empty]
//     </Typography>
//   );
// };
// --- END: MOCK COMPONENTS ---

// MOCK dataStorage utility for runnable example
const dataStorage = (key) => ({
  get: () => JSON.parse(localStorage.getItem(key)),
  set: (data) => localStorage.setItem(key, JSON.stringify(data)),
  remove: () => localStorage.removeItem(key),
});

// --- CART TOTALS CALCULATION LOGIC ---
const SHIPPING_COST = 0; // Fixed shipping cost

const calculateTotals = (cart) => {
  // Calculate the subtotal by iterating over all items
  const subtotal = cart.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return sum + price * quantity;
  }, 0);

  // Total is Subtotal + Shipping Cost
  const total = subtotal + SHIPPING_COST;

  return {
    subtotal: subtotal.toFixed(2),
    total: total.toFixed(2),
  };
};

// --- CART SECTION COMPONENT ---

export function CartSection() {
  const [totals, setTotals] = useState({ subtotal: "0.00", total: "0.00" });
  // 1. New state to track if the cart is empty
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const navigate = useNavigate();
  // Function to load data and calculate totals from local storage
  const loadCartTotals = useCallback(() => {
    const cartStorage = dataStorage("cart");
    const currentCart = cartStorage.get() || [];

    // 2. Check and set the empty state
    const empty = currentCart.length === 0;
    setIsCartEmpty(empty);

    const calculatedTotals = calculateTotals(currentCart);
    setTotals(calculatedTotals);

    console.log("Cart totals reloaded:", calculatedTotals);
  }, []);

  // Load totals on component mount
  useEffect(() => {
    loadCartTotals();
  }, [loadCartTotals]);

  // 3. CONDITIONAL RENDERING: Display "Cart is empty" message
  if (isCartEmpty) {
    return (
      <>
        <CurrentRoute text={"Home / Cart"}></CurrentRoute>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh", // Ensures the message is centered on the page
            py: 10,
            px: 2,
          }}
        >
          <Typography variant="h4" color="text.secondary" gutterBottom>
            Your cart is empty.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              textTransform: "none",
              bgcolor: "#DB4444",
              "&:hover": { bgcolor: "#C0392B" },
            }}
            onClick={() => navigate("/")}
          >
            Return to Shop
          </Button>
        </Box>
      </>
    );
  }

  // If NOT empty, proceed with rendering the full cart
  return (
    <>
      <CurrentRoute text={"Home / Cart"}></CurrentRoute>
      <Stack gap={3}>
        {/* 4. Pass loadCartTotals to CartTable so item removal/quantity changes can update the totals and empty state */}
        <CartTable onDataChange={loadCartTotals}></CartTable>

        {/* Update Cart Button - Now calls the reload function */}
        <Stack direction={"row"} justifyContent={"space-between"} px={18}>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "black",
              borderColor: "rgba(0,0,0,0.3)",
              width: 200,
              height: 50,
            }}
          >
            Return To Shop
          </Button>
          <Button
            variant="outlined"
            onClick={loadCartTotals} // RELOADS totals from storage
            sx={{
              textTransform: "none",
              color: "black",
              borderColor: "rgba(0,0,0,0.3)",
              width: 200,
              height: 50,
            }}
          >
            Update Cart
          </Button>
        </Stack>

        {/* Cart Summary and Coupon Section */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          px={18}
          py={5}
        >
          {/* Coupon Stack (Unchanged) */}
          <Stack direction={"row"} gap={1}>
            <TextField
              id="Coupon"
              label="Coupon Code"
              variant="outlined"
              inputProps={{
                sx: { width: 300 },
              }}
            />
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                bgcolor: "#DB4444",
                color: "white",
                height: 55,
                width: 200,
                "&:hover": { bgcolor: "#C0392B" },
              }}
            >
              Apply Coupon
            </Button>
          </Stack>

          {/* Cart Total Box - Dynamic Values */}
          <Stack
            width={350}
            sx={{ border: "1px solid black", borderRadius: 1, p: 2 }}
          >
            <Typography color="initial" fontSize={25} fontWeight={"500"}>
              Cart Total
            </Typography>

            {/* Dynamic Subtotal */}
            <Stack direction={"row"} justifyContent={"space-between"} py={2}>
              <Typography color="initial">Subtotal:</Typography>
              <Typography color="initial">${totals.subtotal}</Typography>
            </Stack>
            <Divider></Divider>

            {/* Shipping */}
            <Stack direction={"row"} justifyContent={"space-between"} py={2}>
              <Typography color="initial">Shipping:</Typography>
              <Typography color="initial">
                {SHIPPING_COST === 0 ? "Free" : `$${SHIPPING_COST.toFixed(2)}`}
              </Typography>
            </Stack>
            <Divider></Divider>

            {/* Dynamic Total */}
            <Stack direction={"row"} justifyContent={"space-between"} py={2}>
              <Typography color="initial" fontWeight={"bold"}>
                Total:
              </Typography>
              <Typography color="initial" fontWeight={"bold"}>
                ${totals.total}
              </Typography>
            </Stack>

            <Button
              sx={{
                bgcolor: "#DB4444",
                color: "white",
                textTransform: "none",
                width: 250, // Adjusted width for better centering
                height: 50,
                alignSelf: "center",
                fontWeight: "500",
                mt: 2,
              }}
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Proceed to checkout
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
