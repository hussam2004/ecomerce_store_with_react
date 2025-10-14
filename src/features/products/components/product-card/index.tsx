import {
  Box,
  Button,
  Rating,
  Stack,
  Typography,
  IconButton,
  Fade,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { getAssetPath } from "../../../../utils/assets";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { dataStorage } from "../../../../lib/storage";
import { ProductCardBadge } from "../product-card-badge";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../../search/components/search-dialog/search";

const cartStorage = dataStorage("cart");
const wishlistStorage = dataStorage("wishlist");

export function ProductCard({
  product,
  variant = "default",
  isOffer = false,
  isNew = false,
  offerAmount = 0,
}: {
  product: Product;
  variant?: string;
  isOffer?: boolean;
  isNew?: boolean;
  offerAmount?: number;
}) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const wishlist = (wishlistStorage.get() as Product[]) || [];
    const exists = wishlist.some((item: any) => item.id === product.id);
    setIsWishlisted(exists);
  }, [product.id]);

  const handleAddToCart = () => {
    const existingCart = (cartStorage.get() as Product[]) || [];
    const updatedCart = [...existingCart, product];
    cartStorage.set(updatedCart);
    toast.success("Added to cart!");
  };

  const toggleWishlist = () => {
    const wishlist = (wishlistStorage.get() as Product[]) || [];
    const exists = wishlist.some((item: any) => item.id === product.id);
    const updated = exists
      ? wishlist.filter((item) => item.id !== product.id)
      : [...wishlist, product];
    wishlistStorage.set(updated);
    setIsWishlisted(!exists);
    toast[exists ? "info" : "success"](
      exists ? "Removed from wishlist" : "Added to wishlist"
    );
  };

  const removeFromWishlist = () => {
    const wishlist = (wishlistStorage.get() as Product[]) || [];
    const updated = wishlist.filter((item) => item.id !== product.id);
    wishlistStorage.set(updated);
    toast.info("Removed from wishlist");
  };

  const evalBadge = () => {
    if (isNew && isOffer) return "new offer";
    if (isOffer) return "offer";
    if (isNew) return "new";
    return "none";
  };

  return (
    <Stack sx={{ 
      height: { xs: 300, sm: 350 }, 
      width: { xs: "100%", sm: 270 },
      maxWidth: 270,
      minWidth: { xs: 250, sm: 270 }
    }} gap={1} borderRadius={2}>
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          backgroundImage: `url(${product.images[0]})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: { xs: 200, sm: 250 },
          width: "100%",
          maxWidth: 270,
          borderRadius: 2,
          position: "relative",
        }}
      >
        <Stack justifyContent="space-between" height="100%">
          <Stack direction="row" justifyContent="space-between">
            <ProductCardBadge text={evalBadge()} offerAmount={offerAmount} />
            <Fade in={hovered || variant === "wishlist" || isMobile}>
              <Stack direction="column" spacing={1} p={1} sx={{ ml: "auto" }}>
                {variant === "wishlist" ? (
                  <IconButton
                    onClick={removeFromWishlist}
                    sx={{ bgcolor: "white" }}
                  >
                    <Box
                      component="img"
                      src={getAssetPath("wishlist-assets/trash-icon.svg")}
                      width={20}
                      height={20}
                    />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={toggleWishlist}
                    sx={{ bgcolor: "white" }}
                  >
                    {isWishlisted ? (
                      <FavoriteIcon sx={{ color: "#DB4444" }} />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                )}
                <IconButton
                  sx={{ bgcolor: "white" }}
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <RemoveRedEyeIcon />
                </IconButton>
              </Stack>
            </Fade>
          </Stack>

          <Fade in={hovered || variant === "wishlist" || isMobile}>
            <Button
              sx={{ textTransform: "none", bgcolor: "black", color: "white" }}
              fullWidth
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          </Fade>
        </Stack>
      </Box>
      <Typography>{product.title}</Typography>
      {isOffer ? (
        <Stack direction={"row"} gap={2}>
          <Typography color="#DB4444">
            {Math.floor((product.price * 80) / 100)}$
          </Typography>
          <Typography
            color="rgba(0,0,0,0.5)"
            sx={{
              textDecoration: "line-through",
              textDecorationColor: "gray",
            }}
          >
            {product.price}$
          </Typography>
        </Stack>
      ) : (
        <Typography>{product.price}$</Typography>
      )}
      <Stack direction="row" gap={1}>
        <Rating defaultValue={4} />
        <Typography sx={{ color: "rgba(0,0,0,0.5)" }}>(80)</Typography>
      </Stack>
    </Stack>
  );
}
