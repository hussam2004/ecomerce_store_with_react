import { Stack } from "@mui/material";
import { ProductCardSkeleton } from "../product-card-skeleton/index.tsx";

export function ProductListSkeleton() {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        gap={10}
        width={1000}
        pt={8}
      >
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </Stack>
    </>
  );
}
