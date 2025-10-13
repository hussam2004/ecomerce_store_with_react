import { Box, Stack, Typography } from "@mui/material";

export function FeaturesSection() {
  return (
    <Stack direction={"row"} justifyContent={"center"} gap={10} p={10}>
      <Stack alignItems={"center"}>
        <Box
          width={70}
          height={70} // Set a height so background is visible
          mb={2}
          sx={{
            position: "relative",
            backgroundImage: 'url("/home-features-icons/1.svg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Box
            component="img"
            src="/home-features-icons/icon1.svg"
            width={30}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
          />
        </Box>

        <Typography fontSize={"20px"} color="initial" fontWeight={"700"}>
          FREE AND FAST DELIVERY
        </Typography>
        <Typography color="initial">
          Free delivery for all orders over $140
        </Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Box
          width={70}
          height={70} // Set a height so background is visible
          mb={2}
          sx={{
            position: "relative",
            backgroundImage: 'url("/home-features-icons/2.svg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Box
            component="img"
            src="/home-features-icons/icon2.svg"
            width={30}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
          />
        </Box>

        <Typography fontSize={"20px"} color="initial" fontWeight={"700"}>
          24/7 CUSTOMER SERVICE
        </Typography>
        <Typography color="initial">Friendly 24/7 customer support</Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Box
          width={70}
          height={70} // Set a height so background is visible
          mb={2}
          sx={{
            position: "relative",
            backgroundImage: 'url("/home-features-icons/1.svg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Box
            component="img"
            src="/home-features-icons/icon3svg.svg"
            width={30}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
          />
        </Box>

        <Typography fontSize={"20px"} color="initial" fontWeight={"700"}>
          MONEY BACK GUARANTEE
        </Typography>
        <Typography color="initial">We reurn money within 30 days</Typography>
      </Stack>
    </Stack>
  );
}
