import StyledHome from "./style";
import Carousel from "components/Carousel";
import { useGetAdsByCategoryQuery } from "services/ad";
import { useEffect, useState } from "react";
import { IAd } from "interfaces/responses";
import { IServerError } from "interfaces";

const Home = () => {
  const { data, isLoading, error } = useGetAdsByCategoryQuery("sportbike");
  const {
    data: helmets,
    isLoading: isHelmetsLoading,
    error: helmetError,
  } = useGetAdsByCategoryQuery("sportbike");
  const [sportBikes, setSportBikes] = useState<IAd[]>([]);
  const [helmetsData, setHelmetsData] = useState<IAd[]>([]);

  useEffect(() => {
    if (data) setSportBikes(data);
    if (helmets) setHelmetsData(helmets);
  }, [data, helmets]);

  useEffect(() => {
    if (error) {
      const { status } = error as IServerError;
      if (status === "FETCH_ERROR") {
        console.log("Serverda xatolik. Iltimos birozdan so'ng urinib ko'ring");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  useEffect(() => {
    if (helmetError) {
      const { status } = helmetError as IServerError;
      if (status === "FETCH_ERROR") {
        console.log("Serverda xatolik. Iltimos birozdan so'ng urinib ko'ring");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [helmetError]);

  return (
    <StyledHome>
      <picture className="banner__img">
        <source
          srcSet="https://res.cloudinary.com/doswy0zdn/image/upload/f_auto,q_auto/moto-bg-xl"
          media="(min-width: 1400px)"
        />
        <source
          srcSet="https://res.cloudinary.com/doswy0zdn/image/upload/f_auto,q_auto/moto-bg-xl"
          media="(min-width: 1200px)"
        />
        <source
          srcSet="https://res.cloudinary.com/doswy0zdn/image/upload/f_auto,q_auto/moto-bg-sm"
          media="(min-width: 800px)"
        />
        <img
          className="banner__img"
          src="https://res.cloudinary.com/doswy0zdn/image/upload/f_auto,q_auto/moto-bg-sm"
          alt="example"
        />
      </picture>
      <section id="sportbikes" className="section">
        <Carousel
          title="Sportbayklar"
          items={sportBikes}
          isLoading={isLoading}
        />
      </section>
      <section id="helmets" className="section">
        <Carousel
          title="Shlemlar"
          items={helmetsData}
          isLoading={isHelmetsLoading}
        />
      </section>
    </StyledHome>
  );
};

export default Home;
