import { Box, Stack, Typography } from "@mui/material";
import { FlashSaleCountdown } from "../../../features/home/components/count-down-timer";
// <FlashSaleCountdown targetDate={new Date("2025-10-10T00:00:00")} />
export function HomeSection({
  children,
  sectionTitle,
  maintitle,
  isSale = false,
  saleTo,
}: {
  children: React.ReactNode;
  sectionTitle: string;
  maintitle: string;
  isSale?: boolean;
  saleTo?: string;
}) {
  return (
    <Box width={"100%"} px={{ xs: 2, sm: 4, md: 18 }} mt={{ xs: 6, md: 10 }}>
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
          color="#DB4444"
          pl={2}
          fontWeight={"bolder"}
          fontSize={20}
        >
          {sectionTitle}
        </Typography>
      </Stack>
      <Stack direction={{ xs: "column", sm: "row" }} gap={{ xs: 2, sm: 5 }} alignItems={{ xs: "flex-start", sm: "center" }}>
        <Typography 
          fontWeight={"300"} 
          color="initial"
          sx={{ fontSize: { xs: "1.5rem", sm: "2.125rem" } }}
        >
          {maintitle}
        </Typography>
        {isSale ? (
          <FlashSaleCountdown targetDate={new Date(saleTo ?? "")} />
        ) : null}
      </Stack>
      {children}
    </Box>
  );
}
