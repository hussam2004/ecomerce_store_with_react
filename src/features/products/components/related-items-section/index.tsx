import { useQuery } from "@tanstack/react-query";
import { HomeSection } from "../../../../shared/components/home-section";
import ProductService from "../../services/api";
import { useParams } from "react-router-dom";
import { ProductCard } from "../product-card";
import { Stack } from "@mui/material";
export function RelatedItemsSection() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      return await ProductService.getRelayedProducts(id);
    },
  });

  return (
    <>
      <HomeSection sectionTitle={"Related Item"} maintitle={""}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-evenly"}
          pr={18}
          gap={1}
        >
          {data?.map((e: any) => {
            return (
              <ProductCard product={e} offerAmount={0} key={e.id}></ProductCard>
            );
          })}
        </Stack>
      </HomeSection>
    </>
  );
}
