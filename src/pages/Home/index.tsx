import MotoCard from "components/Card";
import StyledHome from "./style";
import { Text } from "components/Text";
import { helmetsData, productsData } from "data";
import HelmetCard from "components/Card/HelmetCard";

const Home = () => {
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
        <Text className="section__title" size="xxl" bold={600}>
          SportBayklar
        </Text>
        <div className="grid__wrp">
          {productsData.slice(0, 3).map((data) => (
            <MotoCard key={data.id} {...data} />
          ))}
        </div>
      </section>
      <section id="helmets" className="section">
        <Text className="section__title" size="xxl" bold={600}>
          Shlemlar
        </Text>
        <div className="grid__wrp">
          {helmetsData.slice(0, 3).map((data) => (
            <HelmetCard key={data.id} {...data} />
          ))}
        </div>
      </section>
    </StyledHome>
  );
};

export default Home;
