import { Link } from "react-router-dom";
import { IProduct } from "interfaces";
import CardStyle from "./style";
import LazyImage from "components/LazyImage";

const HelmetCard = ({ id, price, name, img, address, types }: IProduct) => {
  return (
    <CardStyle>
      <Link to={`/${types[0]}/${name}`} key={id}>
        <div className="helmet__img" >
          <LazyImage className="card__img" src={img} alt="YZF R1M" />
        </div>
        <div className="card__head flex">
          <h1 className="card__title">{name}</h1>
          <b>{price} so'm</b>
        </div>

        <div className="product__address">{address}</div>
      </Link>
    </CardStyle>
  );
};

export default HelmetCard;
