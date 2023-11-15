import MotoCard from "components/Card";
import StyledHome from "./style";
import { Text } from "components/Text";
import { helmetsData, productsData } from "data";
import HelmetCard from "components/Card/HelmetCard";

const Home = () => {
  return (
    <StyledHome>
      <img
        className="banner__img"
        src="https://www.one3motoshop.com/site/uploads/slideshow/5ebd43b6bcaaa-1920-2.jpg"
        alt="Yamaha R1m yzf-r1m"
      />
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
