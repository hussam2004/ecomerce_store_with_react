import { Box, Button, Stack, Typography } from "@mui/material";
import { WishListCard } from "../wishlist-card";
// import { useState } from "react";
import { dataStorage } from "../../../../lib/storage";
import { ProductCard } from "../../../products/components/product-card";
import type { Product } from "../../../search/components/search-dialog/search";
// import { useQuery } from "@tanstack/react-query";
// import { data } from "react-router-dom";
// import { HomeSection } from "../../../../shared/components/home-section";
// import ProductService from "../../../products/services/api";
export function WishListSection() {
  const wishlist = (dataStorage("wishlist").get() as Product[]) || undefined;
  // const [wishlist, setwishlist] = useState();
  // const [related, setrelated] = useState(dataStorage("wishlist").get());

  // const { data } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: async () => {
  //     return await ProductService.getRelayedProducts(e.id);
  //   },
  // });
  // useEffect(() => {}, []);
  return (
    <>
      <Stack>
        <Stack px={{ xs: 2, sm: 4, md: 18 }} py={5} gap={3}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={{ xs: 2, sm: 0 }}
          >
            <Typography>Wishlist ({wishlist.length})</Typography>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "black",
                borderColor: "rgba(0,0,0,0.3)",
                fontWeight: "500",
                p: 2,
              }}
            >
              Move All To Bag
            </Button>
          </Stack>
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: { xs: 2, sm: 3 },
              justifyItems: "center",
            }}
          >
            {wishlist.map((e: any) => {
              return <ProductCard product={e} variant="wishlist"></ProductCard>;
            })}
          </Stack>
        </Stack>
        <Stack px={{ xs: 2, sm: 4, md: 18 }} py={5} gap={3} pb={10}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            gap={{ xs: 3, sm: 0 }}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Box
                component={"div"}
                width={20}
                borderRadius={1}
                height={40}
                bgcolor={"#DB4444"}
              />
              <Typography
                variant="h5"
                color="initial"
                pl={2}
                fontSize={{ xs: 18, sm: 24 }}
              >
                Just For You
              </Typography>
            </Stack>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "black",
                borderColor: "rgba(0,0,0,0.3)",
                fontWeight: "500",
                p: 2,
                width: { xs: "40%", sm: 150 },
                height: { xs: 50, sm: 60 },
              }}
            >
              See All
            </Button>
          </Stack>
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: { xs: 2, sm: 3 },
              justifyItems: "center",
            }}
          >
            {/* <p>{JSON.stringify(data)}</p> */}
            <WishListCard></WishListCard>
            <WishListCard></WishListCard>
            <WishListCard></WishListCard>
            <WishListCard></WishListCard>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
