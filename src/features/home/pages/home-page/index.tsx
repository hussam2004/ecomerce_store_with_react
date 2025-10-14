import { Button, Box } from "@mui/material";
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

// Define or import your Product type
type Product = {
  id: string | number;
  title: string;
  price: number;
  images: string[];
  description?: string;
  category?: {
    id: number;
    name: string;
    image: string;
  };
};

export default function HomePage() {
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      return await ProductService.all();
    },
  });

  return (
    <>
      <HeroSection />
      <HomeSection
        sectionTitle="Today’s"
        maintitle="Flash Sales"
        isSale={true}
        saleTo={"2025-10-10T00:00:00"}
      >
        {isLoading ? (
          <ProductListSkeleton />
        ) : (
          <ProductList
            products={products.slice(1, 10)}
            isNew={false}
            isOffer={true}
            offerAmount={15}
          />
        )}
      </HomeSection>

      <HomeSection
        sectionTitle="Categories"
        maintitle="Browse By Category"
        saleTo={""}
      >
        <CategoryList />
      </HomeSection>

      <HomeSection
        sectionTitle="This Month"
        maintitle="Best Selling Products"
        saleTo={undefined}
      >
        {isLoading ? (
          <ProductListSkeleton />
        ) : (
          <ProductList
            products={products.slice(20, 30)}
            isNew={false}
            isOffer={false}
            offerAmount={0}
          />
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
              width: { xs: "120px", sm: "150px" },
              height: { xs: "45px", sm: "50px" },
              fontWeight: "500",
              fontSize: { xs: 14, sm: 16 },
              alignSelf: "center",
            }}
          >
            View All
          </Button>
        </Box>
      </HomeSection>

      <SpeacialOfferSection targetDate={new Date("2025-10-10T00:00:00")} />

      <HomeSection
        sectionTitle="Our Products"
        maintitle="Explore Our Products"
      >
        {isLoading ? (
          <ProductListSkeleton />
        ) : (
          <ProductList
            products={products.slice(10, 20)}
            isNew={true}
            isOffer={false}
            offerAmount={0}
          />
        )}
      </HomeSection>

      <HomeSection
        sectionTitle="Featured"
        maintitle="New Arrival"
        saleTo={undefined}
      >
        <NewArivalSection />
      </HomeSection>

      <FeaturesSection />
    </>
  );
}
