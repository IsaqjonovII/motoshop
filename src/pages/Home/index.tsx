import LazyImage from "components/LazyImage";
import StyledHome from "./style";

const Home = () => {
  return (
    <StyledHome>
      <LazyImage
        className="banner__img"
        src="https://cloudfront-us-east-1.images.arcpublishing.com/octane/VWV6SDDGXFXQNRT2DRAUBOP7NM.jpg"
        alt="Yamaha R1m yzf-r1m"
      />
      <div className="cards__wrp">
        <div className="card">
          <LazyImage src="https://cloudfront-us-east-1.images.arcpublishing.com/octane/VWV6SDDGXFXQNRT2DRAUBOP7NM.jpg" />
          <div className="card__head flex">
            <h1 className="card__title">Yamaha R1m</h1>
            <b>Price: $27 800</b>
          </div>
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
