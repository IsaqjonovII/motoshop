import { Link } from "react-router-dom";
import { IProduct } from "interfaces";
import CardStyle from "./style";
import LazyImage from "components/LazyImage";
import { formatNumbers } from "utils";
import { Text } from "components/Text";

const MotoCard = ({ id, price, name, img, address, types }: IProduct) => {
  return (
    <CardStyle>
      <Link to={`/${types[0]}/${name}`} key={id}>
        <div className="img__wrp">
          <LazyImage className="card__img" src={img} alt="YZF R1M" />
        </div>
        <div className="card__head flex">
          <Text className="card__title" size="lg" bold={600}>
            {name}
          </Text>
          <Text size="md" bold={600}>
            {formatNumbers(price)} so'm
          </Text>
        </div>

        <Text className="product__address" size="sm" bold={400}>
          {address}
        </Text>
      </Link>
    </CardStyle>
  );
};

export default MotoCard;
