import { Stack, Typography, Box } from "@mui/material";
import type { FunctionComponent, SVGProps } from "react";

interface StatCardProps {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  value: string;
  label: string;
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <Stack
      px={{ xs: 3, sm: 5 }}
      py={2}
      justifyContent="center"
      alignItems="center"
      border="1px solid rgba(0,0,0,0.3)"
      borderRadius={2}
      minWidth={{ xs: 150, sm: 180 }}
      flex={{ xs: "1 1 45%", sm: "none" }}
      sx={{
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: 2,
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box
        sx={{
          backgroundImage: 'url("/home-features-icons/1.svg")',
          height: { xs: 80, sm: 100 },
          width: { xs: 80, sm: 100 },
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon />
      </Box>
      <Typography fontSize={{ xs: 20, sm: 25 }} color="initial" fontWeight="600">
        {value}
      </Typography>
      <Typography fontSize={{ xs: 13, sm: 15 }} color="initial" textAlign="center">
        {label}
      </Typography>
    </Stack>
  );
}