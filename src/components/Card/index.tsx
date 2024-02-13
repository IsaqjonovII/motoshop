/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import CardStyle from "./style";
import { formatNumbers } from "utils";
import { useAppDispatch, useAppSelector } from "hooks";
import { IAdMoto, IAdHelmetAndGear, IMotoAd } from "interfaces/responses";
import {
  addToLikedProducts,
  removeLikedProducts,
} from "store/reducers/ProductSlice";
import { Text } from "components/Text";
import { routes } from "constants/routes";
import LazyImage from "components/LazyImage";
import { Button } from "components/Button";

const { MOTOCYCLES } = routes;
const RecommendCard = (props: IAdMoto) => {
  const { _id, price, title, location, images, owner } = props;
  const dispatch = useAppDispatch();
  const likedProducts = useAppSelector(({ likedProducts }) => likedProducts);

  const handleAddToLikedProducts = (
    id: string,
    e: MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(addToLikedProducts(id));
  };
  const handleRemoveLikedProducts = (
    id: string,
    e: MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.preventDefault();
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
            {likedProducts.includes(_id) ? (
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
          </div>
          <div className="card__row">
            <Text size="lg" bold={600}>
              {formatNumbers(parseInt(price))} so'm
            </Text>
            <Text size="sm" bold={300} className="uppercase">
              {props.adType === "moto" ? (
                <b>{(props as IMotoAd)?.mileage} km</b>
              ) : (
                <b>{(props as IAdHelmetAndGear)?.size}</b>
              )}
            </Text>
          </div>
          <Text className="card__head" size="md" bold={600}>
            {title}
            <span className="label">
              {props.adType === "moto" &&
                " • " + (props as IMotoAd)?.manufacturedAt}
            </span>
          </Text>
          <div className="card__row">
            <Button>Batafsil</Button>
            <FiPhone
              className="icon"
              onClick={(e: any) => handlePhoneCall("tel:" + owner.phone, e)}
            />
          </div>
        </div>
      </Link>
    </CardStyle>
  );
};

export default RecommendCard;
