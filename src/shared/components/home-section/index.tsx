import { Box, Divider, Stack, Typography } from "@mui/material";
import { FlashSaleCountdown } from "../../../features/home/components/count-down-timer";
// <FlashSaleCountdown targetDate={new Date("2025-10-10T00:00:00")} />
export function HomeSection({
  children,
  sectionTitle,
  maintitle,
  isSale = false,
  saleTo,
}) {
  return (
    <Box width={"100%"} pl={18} mt={10}>
      <Stack direction={"row"} alignItems={"center"} pb={3}>
        <Box
          component={"div"}
          width={20}
          borderRadius={1}
          height={40}
          bgcolor={"#DB4444"}
        />
        <Typography
          variant="caption"
          color="initial"
          color="#DB4444"
          pl={2}
          fontWeight={"bolder"}
          fontSize={20}
        >
          {sectionTitle}
        </Typography>
      </Stack>
      <Stack direction={"row"} gap={5}>
        <Typography variant="h4" fontWeight={"300"} color="initial">
          {maintitle}
        </Typography>
        {isSale ? <FlashSaleCountdown targetDate={new Date(saleTo)} /> : null}
      </Stack>
      {children}
    </Box>
  );
}
