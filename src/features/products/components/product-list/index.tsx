// ProductList.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
// import { products } from "../../mock";
import { ProductCard } from "../product-card";
import { Box } from "@mui/material";
import { useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useQuery } from "@tanstack/react-query";
import ProductService from "../../services/api.ts";

export function ProductList({ products, isNew, isOffer, offerAmount }) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <button ref={prevRef} className="prevButton">
          <ChevronLeftIcon fontSize="large" />
        </button>
        <button
          ref={nextRef}
          className="nextButton"
          style={{ marginRight: "80px" }}
        >
          <KeyboardArrowRightIcon fontSize="large" />
        </button>
      </div>

      <Box>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          navigation
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {Array.isArray(products) &&
            products.map((d) => (
              <SwiperSlide key={d.id}>
                <ProductCard
                  product={d}
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
