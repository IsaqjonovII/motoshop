import StyledHome from "./style";
import { helmetsData, productsData } from "data";
import Carousel from "components/Carousel";

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
        <Carousel title="Sportbayklar" items={productsData} />
      </section>
      <section id="helmets" className="section">
        <Carousel title="Shlemlar" items={helmetsData} />
      </section>
    </StyledHome>
  );
};

export default Home;
