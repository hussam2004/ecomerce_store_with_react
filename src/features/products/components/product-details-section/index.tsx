import { useState, type MouseEvent } from "react";
import {
  Box,
  Divider,
  Rating,
  Stack,
  Typography,
  Link as MuiLink,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import { useQuery } from "@tanstack/react-query";
import ProductService from "../../services/api";
import { Loader } from "../../../../shared/components/loader";

type Product = {
  id: string | number;
  title: string;
  description: string;
  price: number;
  images: string[];
};

// type Props = {
//   id: string | number;
// };

export function ProductDetailsSection({ id }: { id: string | undefined }) {
  const colors = ["red", "blue", "green"];
  const sizes = ["XS", "S", "M", "L", "XL"];

  const [size, setSize] = useState<string>("M");
  const [quantity, setQuantity] = useState<number>(2);
  const [selectedColor, setSelectedColor] = useState<string>("red");

  const handleSizeChange = (
    _event: MouseEvent<HTMLElement>,
    newSize: string | null
  ) => {
    if (newSize !== null) setSize(newSize);
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const { data, isLoading } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: async () => await ProductService.details(id),
  });

  if (isLoading || !data) {
    return <Loader />;
  }

  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      gap={{ xs: 3, lg: 2 }}
      px={{ xs: 2, sm: 4, lg: 18 }}
      py={5}
    >
      <Stack
        gap={4}
        justifyContent={{ xs: "center", lg: "space-around" }}
        height={{ xs: "auto", lg: 500 }}
        direction={{ xs: "row", lg: "column" }}
        sx={{ overflowX: { xs: "auto", lg: "visible" } }}
      >
        {data.images?.map((src) => (
          <Box
            key={src}
            component="img"
            src={src}
            sx={{
              width: { xs: 80, sm: 100, lg: 120 },
              height: { xs: 80, sm: 100, lg: 120 },
              objectFit: "contain",
              flexShrink: 0,
            }}
          />
        ))}
      </Stack>

      <Box
        component="img"
        src={data.images?.[0]}
        sx={{
          width: { xs: "100%", sm: 400, lg: 500 },
          height: { xs: 300, sm: 400, lg: 500 },
          objectFit: "contain",
          maxWidth: "100%",
        }}
      />

      <Stack gap={1} pl={{ xs: 0, lg: 5 }} flex={1}>
        <Typography fontSize={{ xs: 20, sm: 24, lg: 30 }}>
          {data.title}
        </Typography>
        <Stack direction="row" gap={1} alignItems={"center"}>
          <Rating defaultValue={4} />
          <Typography fontSize={{ xs: 10, md: 16 }}>(150 Reviews)</Typography>
          <Typography fontSize={{ xs: 10, md: 16 }}>|</Typography>
          <Typography fontSize={{ xs: 10, md: 16 }}>In Stock</Typography>
        </Stack>

        <Typography fontSize={{ xs: 20, sm: 24, lg: 30 }}>
          ${data.price}.00
        </Typography>
        <Typography fontSize={{ xs: 12, sm: 14 }}>
          {data.description}
        </Typography>
        <Divider />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          gap={{ xs: 2, sm: 4 }}
        >
          <Typography>Color:</Typography>
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
                      color,
                      "&.Mui-checked": { color },
                    }}
                  />
                }
                label=""
              />
            ))}
          </RadioGroup>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          gap={{ xs: 3, sm: 0 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: { xs: "100%", sm: 300 },
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              gap={{ xs: 2, sm: 3 }}
            >
              <Typography>Sizes:</Typography>
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

            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              gap={{ xs: 2, sm: 3 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  width: { xs: "100%", sm: "auto" },
                  justifyContent: { xs: "space-between", sm: "flex-start" },
                }}
              >
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

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  width: { xs: "100%", sm: "auto" },
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Button
                  variant="contained"
                  color="error"
                  sx={{ width: { xs: "100%", sm: 165 }, height: 44 }}
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

        <Box sx={{ border: "1px solid #ccc", borderRadius: 1, width: "100%" }}>
          <Stack spacing={0.5} sx={{ p: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <LocalShippingOutlinedIcon sx={{ fontSize: 28 }} />
              <Typography variant="body1" fontWeight="bold">
                Free Delivery
              </Typography>
            </Stack>
            <MuiLink
              href="#"
              variant="body2"
              color="text.secondary"
              underline="always"
              sx={{ ml: 4 }}
            >
              Enter your postal code for Delivery Availability
            </MuiLink>
          </Stack>

          <Divider />

          <Stack spacing={0.5} sx={{ p: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <ReplayOutlinedIcon sx={{ fontSize: 28 }} />
              <Typography variant="body1" fontWeight="bold">
                Return Delivery
              </Typography>
            </Stack>
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
  );
}
