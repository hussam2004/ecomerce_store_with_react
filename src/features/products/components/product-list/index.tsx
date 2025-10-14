// src/features/products/components/product-list/index.tsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import { ProductCard } from "../product-card";
import { Box } from "@mui/material";
import { useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// ✅ Define the product type
type Product = {
  id: string | number;
  title: string;
  price: number;
  images: string[];
  // Add other fields if needed
};

type ProductListProps = {
  products: Product[];
  isNew?: boolean;
  isOffer?: boolean;
  offerAmount?: number;
};

export function ProductList({
  products,
  isNew = false,
  isOffer = false,
  offerAmount = 0,
}: ProductListProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "1rem",
          marginBottom: "2rem",
          paddingRight: "clamp(8px, 2vw, 20px)",
        }}
      >
        <button ref={prevRef} className="prevButton">
          <ChevronLeftIcon fontSize="large" />
        </button>
        <button
          ref={nextRef}
          className="nextButton"
        >
          <KeyboardArrowRightIcon fontSize="large" />
        </button>
      </div>

      <Box>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          navigation={
            {
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            } as NavigationOptions
          }
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                product={product as any}
                isNew={isNew}
                isOffer={isOffer}
                offerAmount={offerAmount}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
