import { useEffect, useState } from "react";
import { Typography, Stack } from "@mui/material";

function getTimeRemaining(targetDate: Date) {
  const total = targetDate.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export function FlashSaleCountdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = getTimeRemaining(targetDate);
      setTimeLeft(updated);
      if (updated.total <= 0) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const renderTimeBox = (label: string, value: number) => (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: { xs: 40, sm: 50, md: 60 },
        height: { xs: 40, sm: 50, md: 60 },
        borderRadius: 2,
      }}
    >
      <Typography 
        variant="caption" 
        fontSize={{ xs: 10, sm: 12, md: 14 }}
      >
        {label}
      </Typography>
      <Typography 
        variant="h6" 
        fontWeight={"600"} 
        fontSize={{ xs: 16, sm: 20, md: 30 }}
      >
        {String(value).padStart(2, "0")}
      </Typography>
    </Stack>
  );

  return (
    <Stack
      direction="row"
      spacing={{ xs: 1, sm: 1.5, md: 2 }}
      alignItems={"center"}
      sx={{
        alignSelf: { xs: "center", sm: "flex-start" },
      }}
    >
      {renderTimeBox("Days", timeLeft.days)}
      <Typography 
        variant="h4" 
        color="initial"
        fontSize={{ xs: 20, sm: 24, md: 32 }}
      >
        :
      </Typography>
      {renderTimeBox("Hours", timeLeft.hours)}
      <Typography 
        variant="h4" 
        color="initial"
        fontSize={{ xs: 20, sm: 24, md: 32 }}
      >
        :
      </Typography>
      {renderTimeBox("Minutes", timeLeft.minutes)}
      <Typography 
        variant="h4" 
        color="initial"
        fontSize={{ xs: 20, sm: 24, md: 32 }}
      >
        :
      </Typography>
      {renderTimeBox("Seconds", timeLeft.seconds)}
    </Stack>
  );
}
