import * as React from "react";
import { useState, useCallback, useMemo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Stack, TextField, IconButton } from "@mui/material";
// --- MUI Icons for Quantity Control ---
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// --- ICON for Remove Button ---
import CloseIcon from "@mui/icons-material/Close";
import type { Product } from "../../../search/components/search-dialog/search";

// MOCK dataStorage utility for runnable example
const dataStorage = (key: any) => ({
  get: () => JSON.parse(localStorage.getItem(key) || '[]'),
  set: (data: Product[]) => localStorage.setItem(key, JSON.stringify(data)),
  remove: () => localStorage.removeItem(key),
});

// --- Helper function to format row data ---
function createData(item: any) {
  // Use a unique ID or fallback key
  const key = item.id || item.title + (item.color || "") + (item.size || "");
  // Ensure quantity is always a number and defaults to 1
  const quantity = item.quantity ? Number(item.quantity) : 1;
  const price = item.price ? Number(item.price) : 0;

  const subtotal = price * quantity;

  return {
    key: key,
    title: item.title,
    price: price,
    quantity: quantity,
    subtotal: subtotal.toFixed(2), // Format subtotal for display
    image: item.images
      ? item.images[0]
      : "https://placehold.co/50x50/333333/ffffff?text=IMG",
  };
}

// --- Component for Individual Quantity Input with Icons ---
// --- Component for Individual Quantity Input with Icons (CORRECTED) ---
// import * as React from "react";
// import { useState, useCallback } from "react";
// import { Box, Stack, TextField } from "@mui/material";
// --- MUI Icons for Quantity Control ---
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import IconButton from "@mui/material/IconButton"; // Ensure IconButton is imported if not globally

// --- Component for Individual Quantity Input with Icons ---
function QuantityInput({
  initialQuantity,
  rowKey,
  onQuantityChange,
}: {
  initialQuantity: any;
  rowKey: any;
  onQuantityChange: any;
}) {
  const minQuantity = 1; // Use a local state for immediate UI feedback on button clicks
  const [quantity, setQuantity] = useState(initialQuantity); // Sync internal state if initialQuantity changes (e.g., if parent forces a re-render)

  React.useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]); // Handler for the Up/Down Icon buttons

  const handleButtonClick = useCallback(
    (increment:any) => {
      const newQuantity = increment
        ? quantity + 1
        : Math.max(minQuantity, quantity - 1);

      setQuantity(newQuantity);
      onQuantityChange(rowKey, newQuantity); // Notify parent immediately
    },
    [quantity, rowKey, onQuantityChange, minQuantity]
  ); // Handler for direct text input changes

  const handleInputChange = (event:any) => {
    const value = event.target.value;
    const num = parseInt(value, 10); // Only update local state and notify parent if the input is a valid number >= min

    if (!isNaN(num) && num >= minQuantity) {
      setQuantity(num);
      onQuantityChange(rowKey, num);
    } // Allowing temporary empty string for typing, but keeping the actual state valid
  };

  return (
    <Box // Main container to define the single bordered box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "stretch",
        border: "1px solid #ccc",
        borderRadius: 1,
        height: 40,
        width: 90,
        overflow: "hidden", // Ensures everything stays inside the border
      }}
    >
            {/* 1. The Quantity Number Input Field */}     {" "}
      <TextField
        variant="standard"
        type="number"
        value={quantity}
        onChange={handleInputChange}
        size="small"
        sx={{
          flexGrow: 1, // Hiding the standard MUI input field underlines
          "& .MuiInput-underline:before": { display: "none" },
          "& .MuiInput-underline:after": { display: "none" }, // Hiding the Webkit spin buttons (Chrome/Safari/Edge)
          "& input": {
            "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
              WebkitAppearance: "none",
              margin: 0,
            },
          },
        }} // **** Styles to achieve perfect vertical centering ****
        InputProps={{
          disableUnderline: true, // Proper way to remove the underline
          sx: {
            height: "100%", // Ensure the container is full height // Target the actual input element's style within the wrapper
            "& input": {
              // Forcefully override vertical padding added by MUI standard/small variant
              paddingTop: "0 !important",
              paddingBottom: "0 !important",
              paddingLeft: 0,
              paddingRight: 0,
              textAlign: "center", // Horizontal center // Match Line Height to Container Height for reliable vertical centering
              lineHeight: "40px",
            },
          },
        }}
        inputProps={{
          min: minQuantity,
          style: {
            width: "100%",
            MozAppearance: "textfield",
          },
        }}
      />
            {/* 2. The Stack of Arrow Icons (Right Side) */}     {" "}
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100%",
          borderLeft: "1px solid #eee", // Visual separator
          width: 25,
          flexShrink: 0,
        }}
      >
                {/* Up Arrow (Increment) */}       {" "}
        <IconButton // Removed size="small" to prevent conflicting internal padding
          onClick={() => handleButtonClick(true)}
          sx={{
            p: 0,
            width: "100%", // Ensure button takes full width of stack
            height: "50%", // Takes exactly 50% of 40px height
            borderRadius: 0, // For clean button separation
            "&:hover": { bgcolor: "grey.100" },
          }}
        >
                   {" "}
          <KeyboardArrowUpIcon sx={{ fontSize: 16, color: "text.primary" }} /> 
               {" "}
        </IconButton>
                {/* Down Arrow (Decrement) */}       {" "}
        <IconButton // Removed size="small" to prevent conflicting internal padding
          onClick={() => handleButtonClick(false)}
          disabled={quantity <= minQuantity}
          sx={{
            p: 0,
            width: "100%", // Ensure button takes full width of stack
            height: "50%", // Takes exactly 50% of 40px height
            borderRadius: 0, // For clean button separation
            "&:hover": { bgcolor: "grey.100" },
            borderTop: "1px solid #eee", // Visual separation between up/down buttons
          }}
        >
                   {" "}
          <KeyboardArrowDownIcon
            sx={{
              fontSize: 16,
              color: quantity <= minQuantity ? "grey.400" : "text.primary",
            }}
          />
                 {" "}
        </IconButton>
             {" "}
      </Stack>
         {" "}
    </Box>
  );
}

// --- CartTable Component (Container) ---
/**
 * @param {object} props
 * @param {() => void} props.onDataChange - Callback to notify parent (CartSection)
 * when data in localStorage is updated.
 */
export function CartTable({ onDataChange }: { onDataChange: any }) {
  // State to manage which row is currently being hovered
  const [hoveredKey, setHoveredKey] = useState(null);
  const lscartStorage = dataStorage("cart");

  // Cart Data State: Only initialize with data from local storage, or an empty array.
  const [cartData, setCartData] = useState(() => {
    const storedData = lscartStorage.get();
    return storedData || [];
  });

  // Memoize the rows for display
  const rows = useMemo(() => cartData.map(createData), [cartData]);

  // FIX: Removed the volatile refreshCartData function.
  // We now only use the useEffect below for the initial load,
  // and the quantity/remove handlers to update cartData and storage.

  // Load data on initial mount (runs once)
  // FIX: This breaks the infinite loop by removing the dependency on the unstable refreshCartData function.
  React.useEffect(() => {
    // Perform initial load directly here.
    const storedData = lscartStorage.get();
    setCartData(storedData || []);

    // NOTE: We rely on the parent component (CartSection) to calculate totals
    // after this component finishes its initial render cycle.
  }, []);

  // Update quantity in local storage and notify parent
  const handleQuantityUpdate = useCallback(
    (key: any, newQuantity: any) => {
      newQuantity = Math.max(1, Number(newQuantity));

      const updatedCart = cartData.map((item:any) => {
        const itemKey =
          item.id || item.title + (item.color || "") + (item.size || "");
        if (itemKey === key) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      // Update local storage
      lscartStorage.set(updatedCart);

      // Update the local state of the table (to get new subtotals)
      setCartData(updatedCart);

      // Notify the parent (CartSection) to re-calculate totals
      if (onDataChange) {
        onDataChange();
      }
    },
    [cartData, lscartStorage, onDataChange]
  );

  // --- Remove Item Handler ---
  const handleRemoveItem = useCallback(
    (key: any) => {
      // Filter out the item based on its unique key
      const updatedCart = cartData.filter((item: any) => {
        const itemKey =
          item.id || item.title + (item.color || "") + (item.size || "");
        return itemKey !== key;
      });

      const removedItem = cartData.find((item: any) => {
        const itemKey =
          item.id || item.title + (item.color || "") + (item.size || "");
        return itemKey === key;
      });

      // Update state and storage
      setCartData(updatedCart);
      lscartStorage.set(updatedCart);

      if (removedItem) {
        console.log(`Removed ${removedItem.title} from cart.`);
      }

      // Notify the parent (CartSection) that the cart has changed
      if (onDataChange) {
        onDataChange();
      }
    },
    [cartData, lscartStorage, onDataChange]
  );

  // --- EMPTY CART LOGIC: Return null if there are no rows (items) ---
  // If the cart is empty (rows.length === 0), this component returns null,
  // allowing the parent (CartSection) to conditionally render the "Your cart is empty" message.
  if (rows.length === 0) {
    return null;
  }

  return (
    <Box sx={{ px: { xs: 2, md: 18 } }}>
      <TableContainer 
        component={Paper}
        sx={{ 
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            height: 8,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: 4,
          },
        }}
      >
        <Table sx={{ minWidth: { xs: 600, md: 650 } }} aria-label="shopping cart table">
          <TableHead>
            <TableRow sx={{ bgcolor: "grey.50" }}>
              <TableCell sx={{ textAlign: "left", pl: 5, fontWeight: "bold" }}>
                Product
              </TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                Price
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Quantity
              </TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                Subtotal
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row:any) => (
              <TableRow
                key={row.key}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
                // --- Hover Handlers to manage visibility ---
                onMouseEnter={() => setHoveredKey(row.key)}
                onMouseLeave={() => setHoveredKey(null)}
              >
                <TableCell
                  sx={{
                    textAlign: "left",
                    position: "relative", // Set positioning context for absolute button
                  }}
                  component="th"
                  scope="row"
                >
                  {/* --- The Remove Button (Visible on Hover) --- */}
                  {hoveredKey === row.key && (
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent row click/other actions
                        handleRemoveItem(row.key);
                      }}
                      sx={{
                        position: "absolute",
                        // Position at the top-left of the image area
                        top: 8,
                        left: 16,
                        bgcolor: "#DB4444", // Red background
                        color: "white",
                        p: 0.5,
                        zIndex: 10,
                        borderRadius: "50%", // Circular shape
                        boxShadow: 2, // Subtle shadow for pop
                        "&:hover": {
                          bgcolor: "#C0392B",
                        },
                      }}
                    >
                      <CloseIcon sx={{ fontSize: 14 }} />
                    </IconButton>
                  )}

                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={2}
                    sx={{ pl: 3 }}
                  >
                    <Box
                      component={"img"}
                      src={row.image}
                      alt={row.title}
                      width={"50px"}
                      height={"50px"}
                      sx={{ objectFit: "contain" }}
                    />
                    {row.title}
                  </Stack>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>{`$${row.price.toFixed(
                  2
                )}`}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <QuantityInput
                      initialQuantity={row.quantity}
                      rowKey={row.key}
                      onQuantityChange={handleQuantityUpdate}
                    />
                  </Box>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {`$${row.subtotal}`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
