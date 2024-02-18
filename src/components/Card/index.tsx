/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import CardStyle, { StyledCard } from "./style";
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

const { MOTOCYCLES, AUTH } = routes;
const RecommendCard = (props: IAdMoto) => {
  const { _id, price, title, location, images } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const likedProducts = useAppSelector(({ likedProducts }) => likedProducts);
  const user = useAppSelector(({ auth }) => auth.user);
  const [removeLike] = useRemoveLikeMutation();
  const [updateLikes] = useUpdateLikesMutation();

  const handleAddToLikedProducts = (
    id: string,
    e: MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!user) {
      navigate(AUTH);
    } else {
      dispatch(addToLikedProducts(id));
      updateLikes({ userId: user?._id, adId: id });
    }
  };
  const handleRemoveLikedProducts = (
    id: string,
    e: MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(removeLikedProducts(id));
    removeLike({ userId: user?._id, adId: id });
  };

  return (
    <CardStyle>
      <Link to={`${MOTOCYCLES}${_id}`}>
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
          </div>
        </div>
      </Link>
    </CardStyle>
  );
};

export default RecommendCard;

export const AdCard = (props: IAdMoto) => {
  const { _id, price, title, location, images } = props;
  const dispatch = useAppDispatch();
  const likedProducts = useAppSelector(({ likedProducts }) => likedProducts);
  const user = useAppSelector(({ auth }) => auth.user);
  const [removeLike] = useRemoveLikeMutation();
  const [updateLikes] = useUpdateLikesMutation();

  const handleAddToLikedProducts = (
    id: string,
    e: MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(addToLikedProducts(id));
    updateLikes({ userId: user?._id, adId: id });
  };
  const handleRemoveLikedProducts = (
    id: string,
    e: MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(removeLikedProducts(id));
    removeLike({ userId: user?._id, adId: id });
  };

  return (
    <Link to={`${MOTOCYCLES}${_id}`}>
      <StyledCard>
        <div className="image__container">
          <LazyImage
            className="img"
            src={images[0]}
            alt={title + "  motoshop.uz, motoshop uz"}
          />
        </div>

        <div className="content">
          <div className="content__head">
            <Text className="card__head" size="md" bold={600}>
              {title}
            </Text>
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
          <div className="content__main">
            <Text size="lg" bold={600}>
              {price.currency === "usd"
                ? `$${formatNumbers(parseInt(price.amount))}`
                : price.currency === "uzs"
                ? `${formatNumbers(parseInt(price.amount))} so'm`
                : `€${formatNumbers(parseInt(price.amount))}`}
            </Text>
          </div>
          <div className="content__bottom">
            <Button>Batafsil</Button>

            <Text size="md" bold={400}>
              {location}
            </Text>
          </div>
        </div>
      </StyledCard>
    </Link>
  );
};
