/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import CardStyle from "./style";
import LazyImage from "components/LazyImage";
import { formatNumbers } from "utils";
import { Text } from "components/Text";
import { routes } from "constants/routes";
import { IAd } from "interfaces/responses";
import { FiPhone } from "react-icons/fi";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useState } from "react";
import { useAppDispatch } from "hooks";
import {
  addToLikedProducts,
  removeLikedProducts,
} from "store/reducers/ProductSlice";

const { MOTOCYCLES } = routes;
const RecommendCard = ({
  _id,
  price,
  name,
  location,
  images,
  mileage,
  category,
  owner,
  manufacturedAt,
}: IAd) => {
  const dispatch = useAppDispatch();
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleAddToLikedProducts = (
    id: string,
    e: MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(addToLikedProducts(id));
    setIsLiked(true);
  };
  const handleRemoveLikedProducts = (
    id: string,
    e: MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsLiked(false);
    dispatch(removeLikedProducts(id));
  };

  const handlePhoneCall = (
    phoneNum: string,
    e: MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    window.location.href = phoneNum;
  };
  return (
    <CardStyle>
      <Link to={`${MOTOCYCLES}${_id}`} key={_id}>
        <div className="img__wrp">
          <LazyImage className="card__img" src={images[0]} alt="YZF R1M" />
          <div className="icon__wrp">
            {isLiked ? (
              <IoMdHeart
                className="heart__icon icon"
                onClick={(e: any) => handleRemoveLikedProducts(_id, e)}
              />
            ) : (
              <IoMdHeartEmpty
                className="heart__icon icon"
                onClick={(e: any) => handleAddToLikedProducts(_id, e)}
              />
            )}
          </div>
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
            {manufacturedAt} • {name}
          </Text>
          <div className="card__title">
            <Text size="lg" bold={600}>
              {formatNumbers(parseInt(price))} so'm
            </Text>
            <Text size="sm" bold={400}>
              <b>{mileage ?? 0} km</b>
            </Text>
          </div>
          <FiPhone
            onClick={(e: any) => handlePhoneCall("tel:" + owner.phone, e)}
          />
        </div>
      </Link>
    </CardStyle>
  );
};

export default RecommendCard;
