import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import RecommendCard from "components/Card";
import { IRecommendCard } from "interfaces/responses";
import "swiper/css";
import "swiper/css/navigation";
import { Text } from "components/Text";

type props = {
  items: IRecommendCard[];
  title: string;
};
const Carousel = ({ items, title }: props) => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const swiperRef = useRef<any>();
  return (
    <div>
      <div className="flex">
        <Text className="section__title" size="xxl" bold={600}>
          {title}
        </Text>
        <div className="flex">
          <div
            className="swiper__icon"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <HiOutlineChevronLeft />
          </div>
          <div
            className="swiper__icon"
            onClick={() => swiperRef.current.slideNext()}
          >
            <HiOutlineChevronRight />
          </div>
        </div>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={20}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1224: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        {items.map((card) => (
          <SwiperSlide key={card._id}>
            <RecommendCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Carousel;