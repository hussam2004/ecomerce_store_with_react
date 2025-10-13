import { Box, Button, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export function WishListCard() {
  return (
    <Stack gap={1}>
      <Box
        sx={{
          backgroundImage: "url('https://i.imgur.com/QkIa5tT.jpeg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 270,
          width: 250,
          borderRadius: 1,
        }}
      >
        <Stack justifyContent={"space-between"} height={"100%"}>
          <Stack direction={"row"} justifyContent={"space-between"} p={1}>
            <Typography
              color="initial"
              sx={{
                width: 65,
                height: 30,
                bgcolor: "#DB4444",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
              }}
            >
              -35%
            </Typography>
            <Box
              sx={{
                width: 30,
                height: 30,
                bgcolor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                fontSize: "16px",
              }}
            >
              <Box
                component={"img"}
                src="/wishlist-assets/trash-icon.svg"
                sx={
                  {
                    // p: 3,
                  }
                }
              />
            </Box>
          </Stack>
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              color: "white",
              fontSize: 10,
              fontWeight: "700",
            }}
          >
            <ShoppingCartIcon /> Add To Cart
          </Button>
        </Stack>
      </Box>
      <Typography fontSize={25} fontWeight={"500"} color="initial">
        Gucci duffle bag
      </Typography>
      <Stack direction={"row"} gap={3}>
        <Typography fontWeight={"500"} color="#db4444">
          960$
        </Typography>
        <Typography
          fontWeight={"500"}
          color="initial"
          sx={{ textDecoration: "line-through", opacity: "0.3" }}
        >
          1100$
        </Typography>
      </Stack>
    </Stack>
  );
}
