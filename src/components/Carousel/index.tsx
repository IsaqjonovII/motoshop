import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import RecommendCard from "components/Card";
import { IAdHelmetAndGear, IAdMoto, IMotoAd } from "interfaces/responses";
import "swiper/css";
import "swiper/css/navigation";
import { Text } from "components/Text";

type props = {
  items: IAdMoto[] | IMotoAd[] | IAdHelmetAndGear[];
  title: string;
  isLoading?: boolean;
};
const Carousel = ({ items, title, isLoading }: props) => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const swiperRef = useRef<any>();
  console.log(isLoading);

  return (
    <div>
      <div className="flex">
        <Text className="section__title" size="xl" bold={600}>
          {title}
        </Text>
        <div className="flex">
          <button
            className="swiper__icon"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <HiOutlineChevronLeft />
          </button>
          <button
            className="swiper__icon"
            onClick={() => swiperRef.current.slideNext()}
          >
            <HiOutlineChevronRight />
          </button>
        </div>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={10}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1224: {
            slidesPerView: 4,
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
