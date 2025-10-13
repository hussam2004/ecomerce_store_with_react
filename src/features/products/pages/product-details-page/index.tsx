import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { ProductDetailsSection } from "../../components/product-details-section";
import { RelatedItemsSection } from "../../components/related-items-section";

export default function ProductDetailsPage() {
  const { id } = useParams();
  return (
    <>
      <ProductDetailsSection id={id}></ProductDetailsSection>
      <RelatedItemsSection />
    </>
  );
}
