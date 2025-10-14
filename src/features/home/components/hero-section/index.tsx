import { Box, Stack, Typography } from "@mui/material";
import "./style.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AppleIcon from "@mui/icons-material/Apple";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
export function HeroSection() {
  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        spacing={2}
        px={{ xs: 2, sm: 4, md: 10 }}
        py={{ xs: 3, md: 6 }}
      >
        <Stack
          flexGrow={1}
          justifyContent={"space-between"}
          sx={{
            borderRight: { xs: "none", md: "1px solid rgba(0,0,0,0.5)" },
            borderBottom: { xs: "1px solid rgba(0,0,0,0.5)", md: "none" },
            pb: { xs: 2, md: 0 },
            mb: { xs: 2, md: 0 },
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
            },
          }}
        >
          {/* the categories list */}
          <Stack justifyContent={"space-between"} direction={"row"}>
            <Typography color="black">Woman’s Fashion</Typography>
            <KeyboardArrowRightIcon sx={{ mr: 2 }} />
          </Stack>
          <Stack justifyContent={"space-between"} direction={"row"}>
            <Typography color="black">Men’s Fashion</Typography>
            <KeyboardArrowRightIcon sx={{ mr: 2 }} />
          </Stack>
          <Typography color="initial">Electronics</Typography>
          <Typography color="initial">Home & Lifestyle</Typography>
          <Typography color="initial">Medicine</Typography>
          <Typography color="initial">Sports & Outdoor</Typography>
          <Typography color="initial">Baby’s & Toys</Typography>
          <Typography color="initial">Groceries & Pets</Typography>
          <Typography color="initial">Health & Beauty</Typography>
        </Stack>
        <Stack
          bgcolor={"black"}
          padding={{ xs: 2, sm: 3, md: 4 }}
          width={{ xs: "100%", md: "55%" }}
          flexGrow={3}
          boxShadow={3}
          borderRadius={1}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent={"space-between"}
            ml={{ xs: 0, sm: 2, md: 4 }}
            alignItems={{ xs: "center", sm: "flex-start" }}
            textAlign={{ xs: "center", sm: "left" }}
          >
            <Stack spacing={{ xs: 2, md: 4 }} flex={1}>
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <AppleIcon
                  fontSize="large"
                  sx={{
                    color: "white",
                    fontSize: { xs: "30px", sm: "40px", md: "50px" },
                  }}
                />
                <Typography variant="caption" color="white">
                  iPhone 14 Series
                </Typography>
              </Stack>
              <Typography
                color="white"
                sx={{
                  maxWidth: { xs: "100%", sm: 250 },
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                  fontWeight: 300,
                }}
              >
                Up to 10% off Voucher
              </Typography>
              <Stack
                direction={"row"}
                spacing={1}
                alignItems={"center"}
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <Typography
                  variant="caption"
                  color="white"
                  sx={{
                    borderBottom: "2px solid white",
                    width: "fit-content",
                    cursor: "pointer",
                  }}
                >
                  Shop Now
                </Typography>
                <ArrowForwardIcon sx={{ color: "white" }} />
              </Stack>
            </Stack>
            <Box
              component={"img"}
              src="/hero-image.png"
              sx={{
                width: { xs: "80%", sm: "50%", md: "50%" },
                maxWidth: 300,
                height: "auto",
                mt: { xs: 2, sm: 0 },
              }}
            />
          </Stack>
          <Stack direction={"row"} spacing={1} justifyContent={"center"} mt={2}>
            <CircleOutlinedIcon sx={{ color: "white", fontSize: "15px" }} />
            <CircleOutlinedIcon
              sx={{ color: "white", fontSize: "15px" }}
              fontSize="small"
            />
            <CircleIcon
              sx={{ color: "white", fontSize: "15px" }}
              fontSize="small"
            />
            <CircleOutlinedIcon
              sx={{ color: "white", fontSize: "15px" }}
              fontSize="small"
            />
            <CircleOutlinedIcon
              sx={{ color: "white", fontSize: "15px" }}
              fontSize="small"
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
