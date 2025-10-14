import { Box } from "@mui/material";
import { Category } from "../category";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "swiper/css";

import { ReactComponent as Icon2 } from "../../../../../public/home-category-icons/2.svg";
import { ReactComponent as Icon3 } from "../../../../../public/home-category-icons/3.svg";
import { ReactComponent as Icon4 } from "../../../../../public/home-category-icons/4.svg";
import { ReactComponent as Icon5 } from "../../../../../public/home-category-icons/5.svg";
import { ReactComponent as Icon6 } from "../../../../../public/home-category-icons/6.svg";
import { ReactComponent as Icon1 } from "../../../../../public/home-category-icons/1.svg";

export function CategoryList() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const categories = [
    { icon: Icon1, name: "Phones" },
    { icon: Icon2, name: "Computers" },
    { icon: Icon3, name: "SmartWatch" },
    { icon: Icon4, name: "Camera" },
    { icon: Icon5, name: "HeadPhones" },
    { icon: Icon6, name: "Gaming" },
  ];

  return (
    <Box py={{ xs: 6, md: 10 }}>
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
        <button ref={nextRef} className="nextButton">
          <KeyboardArrowRightIcon fontSize="large" />
        </button>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
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
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <Category icon={category.icon} name={category.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
