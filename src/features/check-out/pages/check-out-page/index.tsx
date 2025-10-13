import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "./config"; // adjust path if needed
import CurrentRoute from "../../../about/components/current-route";
import { CheckoutCartItem } from "../../components/checkout-cart-item";
import { useEffect, useState } from "react";

type CheckoutFormInputs = {
  firstName: string;
  companyName?: string;
  streetAddress: string;
  apartment?: string;
  city: string;
  phone: string;
  email: string;
};

export function CheckOutPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormInputs>({
    resolver: yupResolver(checkoutSchema),
  });

  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsed = JSON.parse(storedCart);
        setCartItems(Array.isArray(parsed) ? parsed : []);
      } catch (error) {
        console.error("Failed to parse cart:", error);
      }
    }
  }, []);

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price);
      return sum + price;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = 0;
  const total = subtotal + shipping;

  const onSubmit = (data: CheckoutFormInputs) => {
    console.log("✅ Checkout submitted:", data);
    console.log("🛒 Cart items:", cartItems);
    console.log("💰 Total:", total);
    // You can send this data to your service or show a toast
  };

  return (
    <>
      <CurrentRoute
        text={"Account / My Account / Product / View Cart / CheckOut"}
      />
      <Typography variant="h4" pl={18} pb={5}>
        Billing Details
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="row" justifyContent="space-between" pb={15}>
          <Stack width="40%" pl={18}>
            <Typography variant="subtitle1" sx={{ color: "rgba(0,0,0,0.4)" }}>
              First Name*
            </Typography>
            <TextField
              {...register("firstName")}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              sx={{ pb: 2 }}
            />

            <Typography variant="subtitle1" sx={{ color: "rgba(0,0,0,0.4)" }}>
              Company Name
            </Typography>
            <TextField {...register("companyName")} sx={{ pb: 2 }} />

            <Typography variant="subtitle1" sx={{ color: "rgba(0,0,0,0.4)" }}>
              Street Address*
            </Typography>
            <TextField
              {...register("streetAddress")}
              error={!!errors.streetAddress}
              helperText={errors.streetAddress?.message}
              sx={{ pb: 2 }}
            />

            <Typography variant="subtitle1" sx={{ color: "rgba(0,0,0,0.4)" }}>
              Apartment, floor, etc. (optional)
            </Typography>
            <TextField {...register("apartment")} sx={{ pb: 2 }} />

            <Typography variant="subtitle1" sx={{ color: "rgba(0,0,0,0.4)" }}>
              Town/City*
            </Typography>
            <TextField
              {...register("city")}
              error={!!errors.city}
              helperText={errors.city?.message}
              sx={{ pb: 2 }}
            />

            <Typography variant="subtitle1" sx={{ color: "rgba(0,0,0,0.4)" }}>
              Phone Number*
            </Typography>
            <TextField
              {...register("phone")}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              sx={{ pb: 2 }}
            />

            <Typography variant="subtitle1" sx={{ color: "rgba(0,0,0,0.4)" }}>
              Email Address*
            </Typography>
            <TextField
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{ pb: 2 }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "rgba(0,0,0,0.5)",
                    "&.Mui-checked": { color: "#DB4444" },
                  }}
                />
              }
              label="Save this information for faster check-out next time"
              sx={{ pt: 2 }}
            />
          </Stack>

          {/* Right Side: Cart Summary */}
          <Stack pr={18} width="45%" gap={2}>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <CheckoutCartItem
                  key={index}
                  imgUrl={item.images?.[0] || ""}
                  name={item.title}
                  price={item.price}
                />
              ))
            ) : (
              <Typography>No items in cart</Typography>
            )}

            <Box pr={15}>
              <Stack direction="row" justifyContent="space-between" py={3}>
                <Typography>Subtotal</Typography>
                <Typography>${subtotal.toFixed(2)}</Typography>
              </Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between" py={3}>
                <Typography>Shipping:</Typography>
                <Typography>Free</Typography>
              </Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between" py={3}>
                <Typography>Total:</Typography>
                <Typography>${total.toFixed(2)}</Typography>
              </Stack>
            </Box>

            <Stack direction="row" justifyContent="space-between">
              <FormControl>
                <RadioGroup
                  defaultValue="Cash on Delivery"
                  name="payment-method"
                >
                  <FormControlLabel
                    value="Bank"
                    control={
                      <Radio
                        sx={{
                          color: "black",
                          "&.Mui-checked": { color: "black" },
                        }}
                      />
                    }
                    label="Bank"
                  />
                  <FormControlLabel
                    value="Cash on Delivery"
                    control={
                      <Radio
                        sx={{
                          color: "black",
                          "&.Mui-checked": { color: "black" },
                        }}
                      />
                    }
                    label="Cash on Delivery"
                  />
                </RadioGroup>
              </FormControl>
              <Stack direction="row" pr={18}>
                <Box component="img" src="/payment-methods/1.svg" height={35} />
                <Box component="img" src="/payment-methods/2.svg" height={35} />
                <Box component="img" src="/payment-methods/3.svg" height={35} />
                <Box component="img" src="/payment-methods/4.svg" height={35} />
              </Stack>
            </Stack>

            <Stack direction="row" gap={1}>
              <TextField
                id="Coupon"
                label="Coupon Code"
                variant="outlined"
                inputProps={{ sx: { width: 300 } }}
              />
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  bgcolor: "#DB4444",
                  color: "white",
                  height: 55,
                  width: 200,
                }}
              >
                Apply Coupon
              </Button>
            </Stack>

            <Button
              type="submit"
              variant="outlined"
              sx={{
                textTransform: "none",
                bgcolor: "#DB4444",
                color: "white",
                height: 55,
                width: 200,
              }}
            >
              Place Order
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
}
