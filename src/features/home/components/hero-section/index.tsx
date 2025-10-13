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
        direction={"row"}
        justifyContent={"space-between"}
        spacing={2}
        px={10}
        py={6}
      >
        <Stack
          flexGrow={1}
          justifyContent={"space-between"}
          sx={{
            borderRight: "1px solid rgba(0,0,0,0.5)",
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
          padding={4}
          width={"55%"}
          flexGrow={3}
          boxShadow={3}
        >
          <Stack direction={"row"} justifyContent={"space-between"} ml={4}>
            <Stack spacing={4}>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <AppleIcon
                  fontSize="large"
                  sx={{ color: "white", fontSize: "50px" }}
                />
                <Typography variant="caption" color="white">
                  iPhone 14 Series
                </Typography>
              </Stack>
              <Typography variant="h3" width={250} color="white">
                Up to 10% off Voucher
              </Typography>
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
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
            <Box component={"img"} src="/hero-image.png" width={"50%"} />
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
