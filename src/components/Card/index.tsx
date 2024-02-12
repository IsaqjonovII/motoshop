/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, type MouseEvent } from "react";
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

const { MOTOCYCLES } = routes;
const RecommendCard = (props: IAdMoto) => {
  const { _id, price, title, location, images, owner } = props;
  const dispatch = useAppDispatch();
  const likedProducts = useAppSelector(({ likedProducts }) => likedProducts);
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
            {isLiked || likedProducts.includes(_id) ? (
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
              {props.adType === "moto"
                ? (props as IMotoAd)?.category
                : (props as IAdHelmetAndGear)?.color}
            </Text>
          </div>
          <Text className="card__title" size="md" bold={600}>
            {title} <br />
            {props.adType === "moto"
              ? (props as IMotoAd)?.manufacturedAt
              : (props as IAdHelmetAndGear)?.size}
          </Text>
          <div className="card__title">
            <Text size="lg" bold={600}>
              {formatNumbers(parseInt(price))} so'm
            </Text>
            <Text size="sm" bold={400}>
              {props.adType === "moto" ? (
                <b>{(props as IMotoAd)?.mileage} km</b>
              ) : (
                <b>{(props as IAdHelmetAndGear)?.brand}</b>
              )}
            </Text>
          </div>
          <ul>
            <li className="ad__detail">
              {props.adType === "moto" ? (
                <span>Yili: </span>
              ) : (
                <span>O&apos;lchami: </span>
              )}
              <Text size="sm" bold={600} className="detail__text uppercase">
                {props.adType === "moto"
                  ? (props as IMotoAd)?.manufacturedAt
                  : (props as IAdHelmetAndGear)?.size}
              </Text>
            </li>
            <li className="ad__detail">
              {props.adType === "moto" ? (
                <span>Bosgan masofasi: </span>
              ) : (
                <span>Xolati: </span>
              )}
              <Text size="sm" bold={600} className="detail__text">
                {props.adType === "moto"
                  ? (props as IMotoAd)?.mileage + " km"
                  : (props as IAdHelmetAndGear)?.condition}
              </Text>
            </li>
            <li className="ad__detail">
              {props.adType === "moto" ? (
                <span>Turi: </span>
              ) : (
                <span>Brand: </span>
              )}
              <Text size="sm" bold={600} className="detail__text uppercase">
                {props.adType === "moto"
                  ? (props as IMotoAd)?.category
                  : (props as IAdHelmetAndGear)?.brand}
              </Text>
            </li>
            <li className="ad__detail">
              Manzili:{" "}
              <Text size="sm" bold={600} className="detail__text">
                {props.location}
              </Text>
            </li>
            <li className="ad__detail">
              Rangi:{" "}
              <Text size="sm" bold={600} className="detail__text">
                {props.color}
              </Text>
            </li>
          </ul>
          <FiPhone
            onClick={(e: any) => handlePhoneCall("tel:" + owner.phone, e)}
          />
        </div>
      </Link>
    </CardStyle>
  );
};

export default RecommendCard;
