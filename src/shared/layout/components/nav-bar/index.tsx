import {
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  Box,
  IconButton,
  Menu,
  ListItemIcon,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CancelIcon from "@mui/icons-material/Cancel";
import ReviewsIcon from "@mui/icons-material/RateReview";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../../features/auth/store";
import { useState } from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Sign Up", path: "/auth/signup" },
  { label: "Log In", path: "/auth/login" },
];

export function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack position="fixed" top={0} zIndex={100} width="100%">
      {/* Top Banner */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        bgcolor="black"
        color="white"
        spacing={1}
        px={{ xs: 2, sm: 4 }}
        py={1}
      >
        <Typography textAlign="center" fontSize={{ xs: 12, sm: 14 }}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </Typography>
        <Typography
          color="white"
          sx={{ textDecoration: "underline", cursor: "pointer" }}
        >
          ShopNow
        </Typography>
        <FormControl sx={{ width: 100 }}>
          <Select defaultValue="English">
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Arabic">Arabic</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      {/* Main Navbar */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        px={{ xs: 2, sm: 4, md: 10 }}
        py={2}
        boxShadow={1}
        bgcolor="white"
        spacing={{ xs: 2, sm: 0 }}
      >
        {/* Logo */}
        <Box component="img" src="/logo.png" sx={{ height: 20 }} />

        {/* Navigation Links */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="center"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Typography
                key={item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  cursor: "pointer",
                  borderBottom: isActive ? "2px solid rgba(0,0,0,0.3)" : "none",
                  color: "text.primary",
                  "&:hover": {
                    color: "rgba(0,0,0,0.3)",
                  },
                }}
              >
                {item.label}
              </Typography>
            );
          })}
        </Stack>

        {/* Icons Section */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          flexWrap="wrap"
          justifyContent={{ xs: "center", sm: "flex-end" }}
        >
          {!isMobile && (
            <TextField
              id="search"
              label="Search"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchSharpIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ minWidth: 150 }}
            />
          )}

          <FavoriteBorderSharpIcon
            onClick={() => navigate("/wishlist")}
            sx={{ cursor: "pointer" }}
          />
          <ShoppingCartIcon
            onClick={() => navigate("/cart")}
            sx={{ cursor: "pointer" }}
          />

          {isAuthenticated && (
            <>
              <IconButton onClick={handleProfileClick}>
                <Box
                  bgcolor="#DB4444"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="50%"
                  p={1}
                >
                  <Person2OutlinedIcon sx={{ color: "white" }} />
                </Box>
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                PaperProps={{ elevation: 4, sx: { mt: 1.5, minWidth: 200 } }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={() => navigate("/account")}>
                  <ListItemIcon>
                    <ManageAccountsIcon fontSize="small" />
                  </ListItemIcon>
                  Manage My Account
                </MenuItem>
                <MenuItem onClick={() => navigate("/orders")}>
                  <ListItemIcon>
                    <ShoppingBagIcon fontSize="small" />
                  </ListItemIcon>
                  My Orders
                </MenuItem>
                <MenuItem onClick={() => navigate("/cancellations")}>
                  <ListItemIcon>
                    <CancelIcon fontSize="small" />
                  </ListItemIcon>
                  My Cancellations
                </MenuItem>
                <MenuItem onClick={() => navigate("/reviews")}>
                  <ListItemIcon>
                    <ReviewsIcon fontSize="small" />
                  </ListItemIcon>
                  My Reviews
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={() => {
                    logout();
                    navigate("/auth/login");
                  }}
                >
                  <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
