import { Link } from "react-router-dom";
import CardStyle from "./style";
import LazyImage from "components/LazyImage";
import { formatNumbers } from "utils";
import { Text } from "components/Text";
import { routes } from "constants/routes";
import { IAd } from "interfaces/responses";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

const { MOTOCYCLES } = routes;
const RecommendCard = ({
  _id,
  price,
  name,
  location,
  images,
  mileage,
  category,
}: IAd) => {
  return (
    <CardStyle>
      <Link to={`${MOTOCYCLES}${_id}`} key={_id}>
        <div className="img__wrp">
          <LazyImage className="card__img" src={images[0]} alt="YZF R1M" />
          <IoMdHeartEmpty
            onClick={() => alert("hey")}
            className="heart__icon icon"
          />
          {/* <IoMdHeart className="heart__icon icon" /> */}
        </div>
        <div className="card__content">
          <div className="card__head">
            <Text className="head__text" size="sm" bold={400}>
              {location}
            </Text>
            <Text className="head__text" size="sm" bold={400}>
              {category}
            </Text>
          </div>
          <Text className="card__title" size="md" bold={600}>
            {name}
          </Text>
          <Text size="lg" bold={600}>
            {formatNumbers(parseInt(price))} so'm
          </Text>
          <ul className="card__list">
            <li>
              <Text size="sm" bold={400}>
                Bosgan yo'l: <b>{mileage ?? 0} km</b>
              </Text>
            </li>
            <li>
              <Text size="sm" bold={400}>
                Bosgan yo'l: <b>{mileage ?? 0} km</b>
              </Text>
            </li>
          </ul>
        </div>
      </Link>
    </CardStyle>
  );
};

export default RecommendCard;
