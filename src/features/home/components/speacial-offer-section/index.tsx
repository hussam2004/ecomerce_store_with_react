
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { getAssetPath } from "../../../../utils/assets";

export function SpeacialOfferSection({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));
  function getTimeRemaining(targetDate: Date) {
    const total = targetDate.getTime() - new Date().getTime();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = getTimeRemaining(targetDate);
      setTimeLeft(updated);
      if (updated.total <= 0) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <>
      <Stack
        mx={{ xs: 2, sm: 8, md: 16 }}
        mr={{ xs: 2, sm: 4, md: 8 }}
        p={{ xs: 2, sm: 3, md: 2 }}
        height={{ xs: "auto", md: "70vh" }}
        minHeight={{ xs: 400, md: "70vh" }}
        bgcolor={"black"}
        justifyContent={"space-between"}
        direction={{ xs: "column", md: "row" }}
        position={"relative"}
        boxShadow={5}
        borderRadius={2}
      >
        <Box
          position={"absolute"}
          height={"100%"}
          width={"100%"}
          sx={{
            background:
              "radial-gradient(circle at 90% center,rgba(100, 100, 100, 1) 0%, rgba(0, 0, 0, 1) 100%)",
            opacity: "0.6",
            pointerEvents: "none",
          }}
          top={"0"}
          right={0}
          zIndex={0}
        ></Box>
        <Stack 
          ml={{ xs: 2, sm: 4, md: 9 }} 
          my={3} 
          justifyContent={"space-between"} 
          zIndex={10}
          flex={1}
          textAlign={{ xs: "center", md: "left" }}
        >
          <Typography color="#88ff66">Categories</Typography>
          <Typography 
            color="white"
            sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3.75rem" } }}
          >
            Enhance Your Music Experience
          </Typography>
          <Stack 
            direction="row" 
            gap={{ xs: 2, sm: 3 }} 
            my={2}
            justifyContent={{ xs: "center", md: "flex-start" }}
            flexWrap="wrap"
          >
            <Box
              width={{ xs: 50, sm: 60 }}
              height={{ xs: 50, sm: 60 }}
              p={{ xs: 3, sm: 5 }}
              bgcolor={"white"}
              borderRadius={30}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={0}
            >
              <Typography color="black" fontWeight={"700"} fontSize={{ xs: 18, sm: 25 }}>
                {timeLeft.days}
              </Typography>
              <Typography color="black" fontSize={{ xs: 11, sm: 13 }}>
                Days
              </Typography>
            </Box>
            <Box
              width={{ xs: 50, sm: 60 }}
              height={{ xs: 50, sm: 60 }}
              p={{ xs: 3, sm: 5 }}
              bgcolor={"white"}
              borderRadius={30}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={0}
            >
              <Typography color="black" fontWeight={"700"} fontSize={{ xs: 18, sm: 25 }}>
                {timeLeft.hours}
              </Typography>
              <Typography color="black" fontSize={{ xs: 11, sm: 13 }}>
                Hours
              </Typography>
            </Box>
            <Box
              width={{ xs: 50, sm: 60 }}
              height={{ xs: 50, sm: 60 }}
              p={{ xs: 3, sm: 5 }}
              bgcolor={"white"}
              borderRadius={30}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={0}
            >
              <Typography color="black" fontWeight={"700"} fontSize={{ xs: 18, sm: 25 }}>
                {timeLeft.minutes}
              </Typography>
              <Typography color="black" fontSize={{ xs: 11, sm: 13 }}>
                Minutes
              </Typography>
            </Box>
            <Box
              width={{ xs: 50, sm: 60 }}
              height={{ xs: 50, sm: 60 }}
              p={{ xs: 3, sm: 5 }}
              bgcolor={"white"}
              borderRadius={30}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={0}
            >
              <Typography color="black" fontWeight={"700"} fontSize={{ xs: 18, sm: 25 }}>
                {timeLeft.seconds}
              </Typography>
              <Typography color="black" fontSize={{ xs: 11, sm: 13 }}>
                Seconds
              </Typography>
            </Box>
          </Stack>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#00ff66",
              color: "white",
              width: { xs: 140, sm: 170 },
              height: { xs: 50, sm: 60 },
              fontSize: { xs: 14, sm: 15 },
              fontWeight: "600",
              alignSelf: { xs: "center", md: "flex-start" }
            }}
          >
            Buy Now!
          </Button>
        </Stack>
        <Box 
          height={"100%"} 
          zIndex={5} 
          ml={"auto"}
          display={{ xs: "none", md: "block" }}
          flex={1}
        >
          <Box 
            component={"img"} 
            src={getAssetPath("enhance-offer.png")} 
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }}
          />
        </Box>
      </Stack>
    </>
  );
}
