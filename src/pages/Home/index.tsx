import StyledHome from "./style";
import LazyImage from "components/LazyImage";
import { productsData } from "data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <StyledHome>
      <LazyImage
        className="banner__img"
        src="https://ik.imagekit.io/iii299/motoshop/bg.jpg?updatedAt=1697609532380"
        alt="Yamaha R1m yzf-r1m"
      />{" "}
      <section id="sportbikes">
        <div className="cards__wrp">
          {productsData.map(({ id, price, name, img, address, types }) => (
            <Link to={`/${types[0]}/${name}`} key={id}>
              <div className="card">
                <LazyImage src={img} alt="YZF R1M" />
                <div className="card__head flex">
                  <h1 className="card__title">{name}</h1>
                  <b>{price} so'm</b>
                </div>

                <div className="product__address">{address}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section id="helmets">
            
      </section>
    </StyledHome>
  );
};

export default Home;
