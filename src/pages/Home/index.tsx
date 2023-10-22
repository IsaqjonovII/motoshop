import MotoCard from "components/Card";
import StyledHome from "./style";
import LazyImage from "components/LazyImage";
import { helmetsData, productsData } from "data";
import HelmetCard from "components/Card/HelmetCard";

const Home = () => {
  return (
    <StyledHome>
      <LazyImage
        className="banner__img"
        src="https://ik.imagekit.io/iii299/motoshop/bg.jpg?updatedAt=1697609532380"
        alt="Yamaha R1m yzf-r1m"
      />{" "}
      <section id="sportbikes" className="section">
        <h1 className="section__title">SportBayklar</h1>
        <div className="grid__wrp">
          {productsData.slice(0, 3).map((data) => (
            <MotoCard key={data.id} {...data} />
          ))}
        </div>
      </section>
      <section id="helmets" className="section">
        <h1 className="section__title">Shlemlar</h1>
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
