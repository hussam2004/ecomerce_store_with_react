import { Stack, Button, Typography, Box } from "@mui/material";
import { HomeSection } from "../../../../shared/components/home-section";
import { CategoryList } from "../../../categories/components/category-list";
import { ProductList } from "../../../products/components/product-list";
import { FeaturesSection } from "../../components/features-section";
import { HeroSection } from "../../components/hero-section";
import { useQuery } from "@tanstack/react-query";
import ProductService from "../../../products/services/api";
import { SpeacialOfferSection } from "../../components/speacial-offer-section";
import { NewArivalSection } from "../../components/new-arival-section";
import { ProductListSkeleton } from "../../../products/components/product-list-skeleton";
import { FlashSaleCountdown } from "../../components/count-down-timer";

export default function HomePage() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return await ProductService.all();
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error("Failed to load products:", error);
    },
  });
  return (
    <>
      <HeroSection></HeroSection>
      <HomeSection
        sectionTitle="Today’s"
        maintitle="Flash Sales"
        isSale={true}
        saleTo={"2025-10-10T00:00:00"}
      >
        {/* <FlashSaleCountdown targetDate={new Date("2025-10-10T00:00:00")} /> */}
        {isLoading ? (
          <ProductListSkeleton />
        ) : (
          <ProductList
            products={Array.isArray(products) ? products.slice(1, 10) : []}
            isNew={false}
            isOffer={true}
            offerAmount={15}
          ></ProductList>
        )}
      </HomeSection>
      <HomeSection sectionTitle="Categories" maintitle="Browse By Category">
        <CategoryList />
      </HomeSection>
      {/* <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      > */}
      <HomeSection sectionTitle="This Month" maintitle="Best Selling Products">
        {isLoading ? (
          <ProductListSkeleton />
        ) : (
          <ProductList
            products={Array.isArray(products) ? products.slice(20, 30) : []}
            isNew={false}
            isOffer={false}
            offerAmount={0}
          ></ProductList>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 5,
          }}
        >
          <Button
            variant="contained"
            sx={{
              color: "#FAFAFA",
              bgcolor: "#DB4444",
              width: "150px",

              height: "50px",
              fontWeight: "500",
              marginRight: "144px",
              alignSelf: "center",
            }}
          >
            View All
          </Button>
        </Box>
      </HomeSection>
      {/* <ProductList></ProductList> */}
      {/* </Stack> */}
      <SpeacialOfferSection targetDate={new Date("2025-10-10T00:00:00")} />
      <HomeSection
        sectionTitle={"Our Products"}
        maintitle={"Explore Our Products"}
      >
        {isLoading ? (
          <ProductListSkeleton />
        ) : (
          <ProductList
            products={Array.isArray(products) ? products.slice(10, 20) : []}
            isNew={true}
            isOffer={false}
            offerAmount={0}
          ></ProductList>
        )}
      </HomeSection>
      <HomeSection sectionTitle={"Featured"} maintitle={"New Arrival"}>
        <NewArivalSection />
      </HomeSection>
      <FeaturesSection></FeaturesSection>
    </>
  );
}
