import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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
  console.log(items);
  return (
    <div>
      <Text className="section__title" size="xxl" bold={600}>
        {title}
      </Text>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
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
