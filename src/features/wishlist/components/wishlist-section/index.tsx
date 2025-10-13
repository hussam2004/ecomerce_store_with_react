import { Box, Button, Stack, Typography } from "@mui/material";
import { WishListCard } from "../wishlist-card";
import { useEffect, useState } from "react";
import { dataStorage } from "../../../../lib/storage";
import { ProductCard } from "../../../products/components/product-card";
import { useQuery } from "@tanstack/react-query";
// import { data } from "react-router-dom";
// import { HomeSection } from "../../../../shared/components/home-section";
import ProductService from "../../../products/services/api";
export function WishListSection() {
  const [wishlist, setwishlist] = useState(dataStorage("wishlist").get());
  const [related, setrelated] = useState(dataStorage("wishlist").get());

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
        <Stack px={18} py={5} gap={3}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            // flexWrap={"wrap"}
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
            direction={"row"}
            justifyContent={"space-around"}
            flexWrap={"wrap"}
            gap={2}
          >
            {wishlist.map((e) => {
              return <ProductCard product={e} variant="wishlist"></ProductCard>;
            })}
          </Stack>
        </Stack>
        <Stack px={18} py={5} gap={3} pb={10}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"} alignItems={"center"}>
              <Box
                component={"div"}
                width={20}
                borderRadius={1}
                height={40}
                bgcolor={"#DB4444"}
              />
              <Typography variant="h5" color="initial" pl={2}>
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
                width: 150,
                height: 60,
              }}
            >
              See All
            </Button>
          </Stack>
          <Stack direction={"row"} justifyContent={"space-between"}>
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
