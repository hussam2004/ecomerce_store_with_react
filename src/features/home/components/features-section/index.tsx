import { Box, Stack, Typography } from "@mui/material";
import { getAssetPath } from "../../../../utils/assets";

export function FeaturesSection() {
  return (
    <Stack 
      direction={{ xs: "column", md: "row" }} 
      justifyContent={"center"} 
      gap={{ xs: 4, md: 10 }} 
      p={{ xs: 4, sm: 6, md: 10 }}
      alignItems="center"
    >
      <Stack alignItems={"center"}>
        <Box
          width={70}
          height={70}
          mb={2}
          sx={{
            position: "relative",
            backgroundImage: `url(${getAssetPath("home-features-icons/1.svg")})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Box
            component="img"
            src={getAssetPath("home-features-icons/icon1.svg")}
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

        <Typography 
          fontSize={{ xs: "16px", sm: "18px", md: "20px" }} 
          color="initial" 
          fontWeight={"700"}
          textAlign="center"
        >
          FREE AND FAST DELIVERY
        </Typography>
        <Typography color="initial" textAlign="center" fontSize={{ xs: 14, sm: 16 }}>
          Free delivery for all orders over $140
        </Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Box
          width={70}
          height={70}
          mb={2}
          sx={{
            position: "relative",
            backgroundImage: `url(${getAssetPath("home-features-icons/2.svg")})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Box
            component="img"
            src={getAssetPath("home-features-icons/icon2.svg")}
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

        <Typography 
          fontSize={{ xs: "16px", sm: "18px", md: "20px" }} 
          color="initial" 
          fontWeight={"700"}
          textAlign="center"
        >
          24/7 CUSTOMER SERVICE
        </Typography>
        <Typography color="initial" textAlign="center" fontSize={{ xs: 14, sm: 16 }}>Friendly 24/7 customer support</Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Box
          width={70}
          height={70}
          mb={2}
          sx={{
            position: "relative",
            backgroundImage: `url(${getAssetPath("home-features-icons/1.svg")})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Box
            component="img"
            src={getAssetPath("home-features-icons/icon3svg.svg")}
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

        <Typography 
          fontSize={{ xs: "16px", sm: "18px", md: "20px" }} 
          color="initial" 
          fontWeight={"700"}
          textAlign="center"
        >
          MONEY BACK GUARANTEE
        </Typography>
        <Typography color="initial" textAlign="center" fontSize={{ xs: 14, sm: 16 }}>We reurn money within 30 days</Typography>
      </Stack>
    </Stack>
  );
}