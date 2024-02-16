/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import CardStyle from "./style";
import { formatNumbers } from "utils";
import { useAppDispatch, useAppSelector } from "hooks";
import { IAdMoto } from "interfaces/responses";
import {
  addToLikedProducts,
  removeLikedProducts,
} from "store/reducers/ProductSlice";
import { Text } from "components/Text";
import { routes } from "constants/routes";
import LazyImage from "components/LazyImage";
import { Button } from "components/Button";
import { useRemoveLikeMutation, useUpdateLikesMutation } from "services/ad";

const { MOTOCYCLES } = routes;
const RecommendCard = (props: IAdMoto) => {
  const { _id, price, title, location, images, owner } = props;
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state);
  const { likedProducts, auth } = userData;
  const [removeLike] = useRemoveLikeMutation();
  const [updateLikes] = useUpdateLikesMutation();

  const handleAddToLikedProducts = (
    id: string,
    e: MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(addToLikedProducts(id));
    updateLikes({ userId: auth.user?._id, adId: id });
  };
  const handleRemoveLikedProducts = (
    id: string,
    e: MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(removeLikedProducts(id));
    removeLike({ userId: auth.user?._id, adId: id });
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
          <div className="card__row">
            <Text className="head__text" size="sm" bold={400}>
              {location}
            </Text>
          </div>
          <div className="card__row">
            <Text size="lg" bold={600}>
              {price.currency === "usd"
                ? `$${formatNumbers(parseInt(price.amount))}`
                : price.currency === "uzs"
                ? `${formatNumbers(parseInt(price.amount))} so'm`
                : `€${formatNumbers(parseInt(price.amount))}`}
            </Text>
          </div>
          <Text className="card__head" size="md" bold={600}>
            {title}
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
