import type { WidthFull } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";

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
        mx={16}
        mr={8}
        p={2}
        height={"70vh"}
        bgcolor={"black"}
        justifyContent={"space-between"}
        direction={"row"}
        position={"relative"}
        boxShadow={5}
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
        <Stack ml={9} my={3} justifyContent={"space-between"} zIndex={10}>
          <Typography color="#88ff66">Categories</Typography>
          <Typography variant="h2" color="white">
            Enhance Your Music Experience
          </Typography>
          <Stack direction={"row"} gap={3} my={2}>
            <Box
              width={60}
              height={60}
              p={5}
              bgcolor={"white"}
              borderRadius={30}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={0}
            >
              <Typography color="black" fontWeight={"700"} fontSize={25}>
                {timeLeft.days}
              </Typography>
              <Typography color="black" fontSize={13}>
                Days
              </Typography>
            </Box>
            <Box
              width={60}
              height={60}
              p={5}
              bgcolor={"white"}
              borderRadius={30}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={0}
            >
              <Typography color="black" fontWeight={"700"} fontSize={25}>
                {timeLeft.hours}
              </Typography>
              <Typography color="black" fontSize={13}>
                Hours
              </Typography>
            </Box>
            <Box
              width={60}
              height={60}
              p={5}
              bgcolor={"white"}
              borderRadius={30}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={0}
            >
              <Typography color="black" fontWeight={"700"} fontSize={25}>
                {timeLeft.minutes}
              </Typography>
              <Typography color="black" fontSize={13}>
                Minutes
              </Typography>
            </Box>
            <Box
              width={60}
              height={60}
              p={5}
              bgcolor={"white"}
              borderRadius={30}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={0}
            >
              <Typography color="black" fontWeight={"700"} fontSize={25}>
                {timeLeft.seconds}
              </Typography>
              <Typography color="black" fontSize={13}>
                Seconds
              </Typography>
            </Box>
          </Stack>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#00ff66",
              color: "white",
              width: 170,
              height: 60,
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            Buy Now!
          </Button>
        </Stack>
        <Box height={"100%"} zIndex={5} ml={"auto"}>
          <Box component={"img"} src="/enhance-offer.png" />
        </Box>
      </Stack>
    </>
  );
}
