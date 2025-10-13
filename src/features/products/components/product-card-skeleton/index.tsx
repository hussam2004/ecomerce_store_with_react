import { Box, Skeleton, Stack, Typography } from "@mui/material";

export function ProductCardSkeleton() {
  return (
    <Stack sx={{ height: 350, width: 270 }} gap={1} borderRadius={2}>
      <Box
        sx={{
          height: 250,
          width: 270,
          borderRadius: 2,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>

      <Skeleton variant="text" width="80%" height={24} />
      <Skeleton variant="text" width="40%" height={24} />

      <Stack direction="row" gap={1} alignItems="center">
        <Skeleton variant="circular" width={20} height={20} />
        <Typography sx={{ color: "rgba(0,0,0,0.5)" }}>
          <Skeleton variant="text" width={40} />
        </Typography>
      </Stack>
    </Stack>
  );
}
