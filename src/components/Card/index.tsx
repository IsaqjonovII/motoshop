import { Link } from "react-router-dom";
import CardStyle from "./style";
import LazyImage from "components/LazyImage";
import { formatNumbers } from "utils";
import { Text } from "components/Text";
import { routes } from "constants/routes";
import { IAd } from "interfaces/responses";

const { MOTOCYCLES } = routes;
const RecommendCard = ({ _id, price, name, location, images }: IAd) => {
  return (
    <CardStyle>
      <Link to={`${MOTOCYCLES}${_id}`} key={_id}>
        <div className="img__wrp">
          <LazyImage className="card__img" src={images[0]} alt="YZF R1M" />
        </div>
        <div className="card__head">
          <Text className="card__title" size="xl" bold={600}>
            {name}
          </Text>
          <Text size="md" bold={600}>
            {formatNumbers(parseInt(price))} so'm
          </Text>
        </div>

        <Text className="product__address" size="sm" bold={400}>
          {location}
        </Text>
      </Link>
    </CardStyle>
  );
};

export default RecommendCard;
