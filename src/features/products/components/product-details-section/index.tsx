// import * as React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ProductService from "../../services/api";
import { useState } from "react";
import {
  Box,
  Divider,
  Rating,
  Stack,
  Typography,
  Link as MuiLink,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  // For quantity input
} from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../../../shared/components/loader";

export function ProductDetailsSection({ id }) {
  const colors = ["red", "blue", "green"];
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(2);
  const sizes = ["XS", "S", "M", "L", "XL"];
  const handleSizeChange = (event, newSize) => {
    if (newSize !== null) setSize(newSize);
  };
  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };
  const [selectedColor, setSelectedColor] = useState("red");
  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      return await ProductService.details(id);
    },
    // onSuccess: () => {
    //   console.log(data);
    // },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <Stack direction={"row"} gap={2} px={18} py={5}>
        <Stack gap={4} justifyContent={"space-around"} height={500}>
          {data.images.map((e) => {
            return (
              <Box
                component={"img"}
                src={e}
                sx={{
                  width: 120,
                }}
              />
            );
          })}
          {/* {data.title} */}
        </Stack>
        <Box
          component={"img"}
          src={data.images[0]}
          sx={{
            width: 500,
            height: 500,
            objectFit: "contain",
          }}
        />
        <Stack gap={1} pl={5}>
          <Typography fontSize={30} color="initial">
            {data.title}
          </Typography>
          <Stack direction={"row"}>
            <Rating defaultValue={4} />
            <Typography color="initial">(150 Reviews)</Typography>
            <Typography color="initial"> | </Typography>
            <Typography color="initial">In Stock</Typography>
          </Stack>
          <Typography fontSize={30} color="initial">
            ${data.price}.00${" "}
          </Typography>
          <Typography color="initial" fontSize={"10px"}>
            {data.description}
          </Typography>
          <Divider></Divider>
          <Stack direction={"row"} alignItems={"center"} gap={4}>
            <Typography color="initial"> colure: </Typography>
            <RadioGroup
              row
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              {colors.map((color) => (
                <FormControlLabel
                  key={color}
                  value={color}
                  control={
                    <Radio
                      sx={{
                        color: color,
                        "&.Mui-checked": {
                          color: color,
                        },
                      }}
                    />
                  }
                  label=""
                />
              ))}
            </RadioGroup>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: 300,
              }}
            >
              <Stack direction={"row"} alignItems={"center"} gap={3}>
                <Typography color="initial">Sizes:</Typography>

                {/* Size Selector */}
                <ToggleButtonGroup
                  value={size}
                  exclusive
                  onChange={handleSizeChange}
                  aria-label="size"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  {sizes.map((s) => (
                    <ToggleButton
                      key={s}
                      value={s}
                      sx={{
                        border: "1px solid #ccc",
                        color: s === size ? "white" : "black",
                        backgroundColor: s === size ? "red" : "transparent",
                        "&:hover": {
                          backgroundColor: s === size ? "darkred" : "#f0f0f0",
                        },
                        width: 40,
                        height: 40,
                      }}
                    >
                      {s}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} gap={3}>
                {/* Quantity Selector */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={() => handleQuantityChange(-1)}
                  >
                    -
                  </Button>
                  <Typography>{quantity}</Typography>
                  <Button
                    variant="outlined"
                    onClick={() => handleQuantityChange(1)}
                  >
                    +
                  </Button>
                </Box>

                {/* Buy Now + Heart */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ width: 165, height: 44 }}
                  >
                    Buy Now
                  </Button>
                  <IconButton>
                    <FavoriteBorderIcon color="error" />
                  </IconButton>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: 1,
              width: "100%", // Set the width as needed within your layout
            }}
          >
            {/* 1. Free Delivery Section */}
            <Stack spacing={0.5} sx={{ p: 2 }}>
              {/* Icon and Title */}
              <Stack direction="row" alignItems="center" spacing={1}>
                <LocalShippingOutlinedIcon sx={{ fontSize: 28 }} />
                <Typography variant="body1" fontWeight="bold">
                  Free Delivery
                </Typography>
              </Stack>

              {/* Subtext/Action Link */}
              <MuiLink
                href="#"
                variant="body2"
                color="text.secondary"
                underline="always"
                sx={{ ml: 4 }} // Indent to align with text above
              >
                Enter your postal code for Delivery Availability
              </MuiLink>
            </Stack>

            {/* Divider Line */}
            <Divider />

            {/* 2. Return Delivery Section */}
            <Stack spacing={0.5} sx={{ p: 2 }}>
              {/* Icon and Title */}
              <Stack direction="row" alignItems="center" spacing={1}>
                <ReplayOutlinedIcon sx={{ fontSize: 28 }} />
                <Typography variant="body1" fontWeight="bold">
                  Return Delivery
                </Typography>
              </Stack>

              {/* Subtext and Details Link */}
              <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                Free 30 Days Delivery Returns.
                <MuiLink
                  href="#"
                  color="text.secondary"
                  underline="always"
                  sx={{ ml: 0.5 }}
                >
                  Details
                </MuiLink>
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
