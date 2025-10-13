import { Stack, Typography } from "@mui/material";
import { categories } from "../../mock";
import type { FunctionComponent, SVGProps } from "react";

interface CategoryProps {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  name?: string;
}

export function Category({ icon: Icon, name }: CategoryProps) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      width="200px"
      height="100px"
      gap={1}
      border="1px solid rgba(0,0,0,0.3)"
      sx={{
        transition: "all 0.3s ease",
        "&:hover": {
          bgcolor: "#DB4444",
          color: "white",
          "& svg": {
            fill: "white",
          },
        },
      }}
    >
      <Icon
        style={{
          transform: "scale(0.8)",
          transition: "fill 0.3s ease",
        }}
      />
      <Typography fontSize={15} fontWeight="300">
        {name || categories[0].name}
      </Typography>
    </Stack>
  );
}
