import {
  Stack,
  Typography,
  TextField,
  InputAdornment,
  MenuItem,
  Box,
  IconButton,
  Menu,
  ListItemIcon,
  Divider,
  useMediaQuery,
  useTheme,
  Button,
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
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        direction={"row"}
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
          <span
            style={{
              color: "white",
              textDecoration: "underline",
              cursor: "pointer",
              marginLeft: "6px",
            }}
          >
            ShopNow
          </span>
        </Typography>
        {/* <Typography
          color="white"
          sx={{ textDecoration: "underline", cursor: "pointer" }}
        >
          ShopNow
        </Typography> */}
        {/* <FormControl sx={{ width: 100 }}>
          <Select defaultValue="English">
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Arabic">Arabic</MenuItem>
          </Select>
        </FormControl> */}
      </Stack>

      {/* Main Navbar */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={{ xs: 2, sm: 4, md: 10 }}
        py={2}
        boxShadow={1}
        bgcolor="white"
        position="relative"
        minHeight={72}
      >
        {/* Logo */}
        <Box
          component="img"
          src="/logo.png"
          sx={{
            height: { xs: 18, sm: 20 },
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        />

        {/* Desktop Navigation Links */}
        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {navItems.slice(0, 3).map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Typography
                key={item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  cursor: "pointer",
                  borderBottom: isActive ? "2px solid #DB4444" : "none",
                  color: "text.primary",
                  fontSize: 16,
                  fontWeight: isActive ? 500 : 400,
                  pb: 0.5,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "#DB4444",
                  },
                }}
              >
                {item.label}
              </Typography>
            );
          })}
        </Stack>

        {/* Right Side Icons and Actions */}
        <Stack direction="row" alignItems="center" spacing={1}>
          {/* Search - Desktop Only */}
          {!isMobile && (
            <TextField
              id="search"
              placeholder="What are you looking for?"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchSharpIcon sx={{ color: "text.secondary" }} />
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: "#F5F5F5",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                },
              }}
              sx={{ width: 240 }}
            />
          )}

          {/* Action Icons */}
          <IconButton
            onClick={() => navigate("/wishlist")}
            sx={{
              p: 1,
              "&:hover": { backgroundColor: "rgba(219, 68, 68, 0.1)" },
            }}
          >
            <FavoriteBorderSharpIcon sx={{ fontSize: 24 }} />
          </IconButton>

          <IconButton
            onClick={() => navigate("/cart")}
            sx={{
              p: 1,
              "&:hover": { backgroundColor: "rgba(219, 68, 68, 0.1)" },
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: 24 }} />
          </IconButton>

          {/* Auth Section */}
          {isAuthenticated ? (
            <IconButton onClick={handleProfileClick}>
              <Box
                bgcolor="#DB4444"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="50%"
                p={1}
                sx={{ width: 32, height: 32 }}
              >
                <Person2OutlinedIcon sx={{ color: "white", fontSize: 20 }} />
              </Box>
            </IconButton>
          ) : (
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Button
                onClick={() => navigate("/auth/login")}
                variant="text"
                sx={{
                  textTransform: "none",
                  color: "text.primary",
                  minWidth: "auto",
                  px: 2,
                }}
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/auth/signup")}
                variant="outlined"
                sx={{
                  textTransform: "none",
                  borderColor: "#DB4444",
                  color: "#DB4444",
                  minWidth: "auto",
                  px: 2,
                  "&:hover": {
                    backgroundColor: "#DB4444",
                    color: "white",
                  },
                }}
              >
                Sign Up
              </Button>
            </Stack>
          )}

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            sx={{
              display: { xs: "block", md: "none" },
              ml: 1,
              p: 1,
            }}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Stack>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <Box
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              bgcolor: "white",
              boxShadow: 3,
              zIndex: 1000,
              display: { xs: "block", md: "none" },
            }}
          >
            <Stack p={3} spacing={2}>
              {/* Mobile Search */}
              <TextField
                placeholder="What are you looking for?"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchSharpIcon sx={{ color: "text.secondary" }} />
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: "#F5F5F5",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  },
                }}
              />

              <Divider />

              {/* Mobile Navigation Links */}
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Typography
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      setMobileMenuOpen(false);
                    }}
                    sx={{
                      cursor: "pointer",
                      color: isActive ? "#DB4444" : "text.primary",
                      fontWeight: isActive ? 600 : 400,
                      py: 1,
                      px: 1,
                      borderRadius: 1,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: "rgba(219, 68, 68, 0.1)",
                        color: "#DB4444",
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                );
              })}
            </Stack>
          </Box>
        )}

        {/* User Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          PaperProps={{
            elevation: 8,
            sx: {
              mt: 1.5,
              minWidth: 200,
              borderRadius: 2,
              "& .MuiMenuItem-root": {
                borderRadius: 1,
                mx: 1,
                my: 0.5,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem
            onClick={() => {
              navigate("/account");
              handleMenuClose();
            }}
          >
            <ListItemIcon>
              <ManageAccountsIcon fontSize="small" />
            </ListItemIcon>
            Manage My Account
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/orders");
              handleMenuClose();
            }}
          >
            <ListItemIcon>
              <ShoppingBagIcon fontSize="small" />
            </ListItemIcon>
            My Orders
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/cancellations");
              handleMenuClose();
            }}
          >
            <ListItemIcon>
              <CancelIcon fontSize="small" />
            </ListItemIcon>
            My Cancellations
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/reviews");
              handleMenuClose();
            }}
          >
            <ListItemIcon>
              <ReviewsIcon fontSize="small" />
            </ListItemIcon>
            My Reviews
          </MenuItem>
          <Divider sx={{ my: 1 }} />
          <MenuItem
            onClick={() => {
              logout();
              navigate("/auth/login");
              handleMenuClose();
            }}
            sx={{ color: "error.main" }}
          >
            <ListItemIcon>
              <LogoutIcon fontSize="small" sx={{ color: "error.main" }} />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Stack>
    </Stack>
  );
}
