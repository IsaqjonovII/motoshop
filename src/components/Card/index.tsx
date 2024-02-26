/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";
import type { MouseEvent } from "react";
import { FiEye } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import CardStyle from "./style";
import { formatNumbers } from "utils";
import { IAdMoto } from "interfaces/responses";
import { useAppDispatch, useAppSelector } from "hooks";
import { useRemoveLikeMutation, useUpdateLikesMutation } from "services/ad";
import {
  addToLikedProducts,
  removeLikedProducts,
} from "store/reducers/ProductSlice";
import { Text } from "components/Text";
import { routes } from "constants/routes";
import LazyImage from "components/LazyImage";

const { ADS, AUTH } = routes;
interface ILike extends IAdMoto {
  refetch: () => void;
}
const Card = (props: IAdMoto | ILike) => {
  const { _id, price, title, location, images, postedAt, views } = props;
  const date = moment(postedAt).format("HH:MM L");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const likedProducts = useAppSelector(({ likedProducts }) => likedProducts);
  const userId = useAppSelector(({ auth }) => auth.user?._id);
  const [removeLike] = useRemoveLikeMutation();
  const [updateLikes] = useUpdateLikesMutation();

  const handleAddToLikedProducts = (
    id: string,
    e: MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!userId) {
      navigate(AUTH);
    } else {
      dispatch(addToLikedProducts(id));
      updateLikes({ userId, adId: id });
    }
  };
  const handleRemoveLikedProducts = (
    id: string,
    e: MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(removeLikedProducts(id));
    removeLike({ userId, adId: id });
  };

  return (
    <CardStyle>
      <Link to={`${ADS}${_id}`}>
        <div className="img__wrp">
          <LazyImage className="card__img" src={images[0]} alt={title} />
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
          <Text className="head__text" size="sm" bold={400}>
            {location}
          </Text>
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
            <small>{date}</small>

            <small>
              {views}
              <FiEye className="views__icon" />
            </small>
          </div>
        </div>
      </Link>
    </CardStyle>
  );
};

export default Card;
