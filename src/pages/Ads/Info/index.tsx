/* eslint-disable @typescript-eslint/no-explicit-any */
import { Breadcrumb } from "antd";
import { FiEye } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdHeart, IoIosArrowBack } from "react-icons/io";
import { formatNumbers } from "utils";
import {
  useGetAdByIdQuery,
  useGetSimilarAdsQuery,
  useUpdateAdViewMutation,
} from "services/ad";
import { useAppSelector } from "hooks";
import { IAdHelmetAndGear, IAdMoto, IMotoAd } from "interfaces/responses";
import StyledAdInfo from "./style";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { routes } from "constants/routes";
import Carousel from "components/Carousel";
import { Spinner } from "components/Loader";
import ImageGallery from "components/ImageGallery";
import { useGetAdsByUserQuery } from "services/user";

type TParams = {
  id: string;
};
const { HOME, ADS } = routes;
const AdInfo = () => {
  const { id } = useParams<TParams>();
  const user = useAppSelector(({ auth }) => auth.user);
  const [similarAdsData, setsimilarAdsData] = useState<IAdMoto[] | IAdHelmetAndGear[] | IMotoAd[]>([]);
  const [ownerAdsData, setOwnerAdsData] = useState<IAdMoto[] | IAdHelmetAndGear[] | IMotoAd[]>([]);
  const [adData, setAdData] = useState<IAdMoto | IAdHelmetAndGear | IMotoAd>();
  const [updateView, { data: viewData }] = useUpdateAdViewMutation();
  const { data, isLoading, refetch } = useGetAdByIdQuery(id!);
  const { data: ownerAds, isLoading: isOwnerAdsLoading } = useGetAdsByUserQuery(
    { userId: adData?.owner?._id ?? "", adId: adData?._id ?? "" },
    { skip: adData?._id == null }
  );
  const { data: similarAds, isLoading: isSimilarAdsLoading } =
    useGetSimilarAdsQuery({
      type: adData?.adType ?? "moto",
      id: adData?._id ?? "",
    }, { skip: adData?._id == null });

  useEffect(() => {
    if (similarAds) setsimilarAdsData(similarAds);
  }, [similarAds]);
  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewData]);

  useEffect(() => {
    if (id && user && user?._id && !user.viewedAds?.includes(id))
      updateView({ userId: user?._id, adId: id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, user]);
  useEffect(() => {
    if (data) setAdData(data);
  }, [data]);
  useEffect(() => {
    if (ownerAds) setOwnerAdsData(ownerAds);
  }, [ownerAds]);
  
  if (isLoading) return <Spinner isLoading={isLoading} />;
  return (
    <StyledAdInfo>
      <div className="page__container">
        <div className="images">
          <div className="navigation__back">
            <IoIosArrowBack className="icon" />
            <Breadcrumb
              items={[
                {
                  title: <Link to={HOME}>Bosh sahifa</Link>,
                },
                {
                  title: <Link to={ADS}>Barcha e'lonlar</Link>,
                },
                {
                  title: adData?.title,
                },
              ]}
            />
          </div>
          <ImageGallery
            images={adData?.images ?? []}
            title={adData?.title ?? ""}
          />
          <br />
          <Text size="md" bold={400}>
            <span
              dangerouslySetInnerHTML={{ __html: adData?.description ?? "" }}
           />
          </Text>
        </div>

        <div className="content">
          <div className="content__head">
            <Text size="xl" bold={600}>
              {adData?.title}{" "}
            </Text>
            <br />
            <div className="head__items">
              <Text size="sm" bold={300}>
                <FiEye className="icon" /> {adData?.views} marta ko'rilgan
              </Text>
              <Text size="sm" bold={300}>
                <IoMdHeart className="icon" />
                {adData?.likes.likedUsers.length} kishi yoqtirgan
              </Text>
            </div>
          </div>

          <div className="content__body">
            <Text size="xxl" bold={600}>
              {adData?.price.currency === "usd"
                ? `$${formatNumbers(parseInt(adData.price.amount))}`
                : adData?.price.currency === "uzs"
                ? `${formatNumbers(parseInt(adData.price.amount))} so'm`
                : `€${formatNumbers(parseInt(adData?.price.amount ?? ""))}`}
            </Text>
            <br />
            <div className="owner__contact">
              <div>
                <Text size="lg" bold={400}>
                  {adData?.owner?.name}
                </Text>
                <Link to={"tel:" + adData?.owner?.phone}>
                  <Text size="md" bold={400}>
                    +{adData?.owner?.phone}
                  </Text>
                </Link>
              </div>
              <Link to={"tel:" + adData?.owner?.phone}>
                <Button>Qo&apos;ng&apos;iroq qilish</Button>
              </Link>
            </div>
            <br />
            <ul className="labels">
              {/* Manufactured Year or Size */}
              <li className="label">
                {adData?.adType === "moto" && "Ishlab chiqarilgan yili: "}
                {adData?.adType === "helmet" && "O'lchami: "}
                <Text size="md" bold={600}>
                  {adData?.adType === "moto" &&
                    (adData as IMotoAd).manufacturedAt}
                  {adData?.adType === "helmet" &&
                    (adData as IAdHelmetAndGear).size}
                </Text>
              </li>

              {/* Mileage or Condition */}
              <li className="label">
                {adData?.adType === "moto" && "Bosgan masofasi: "}
                {adData?.adType === "helmet" && "Holati:  "}
                <Text size="md" bold={600}>
                  {adData?.adType === "moto" &&
                    (adData as IMotoAd).mileage + " km"}
                  {adData?.adType === "helmet" &&
                    (adData as IAdHelmetAndGear).condition}
                </Text>
              </li>

              {/* Category or Brand */}
              <li className="label">
                {adData?.adType === "moto" && "Turi: "}
                {adData?.adType === "helmet" && "Brand:  "}
                <Text size="md" bold={600}>
                  {adData?.adType === "moto" && (adData as IMotoAd).category}
                  {adData?.adType === "helmet" &&
                    (adData as IAdHelmetAndGear).brand}
                </Text>
              </li>

              {/* Engine Size (if Moto) */}
              {adData?.adType === "moto" && (
                <li className="label">
                  Dvigatel hajmi:{" "}
                  <Text size="md" bold={600}>
                    {(adData as IMotoAd).engineSize + " cc"}
                  </Text>
                </li>
              )}

              {/* Color */}
              <li className="label">
                Rangi:{" "}
                <Text size="md" bold={600}>
                  {adData?.color}
                </Text>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      {ownerAds?.length ? (
        <Carousel
          title="Muallifning boshqa e'lonlari"
          items={ownerAdsData}
          isLoading={isOwnerAdsLoading}
        />
      ) : null}
      {similarAds?.length ? (
        <Carousel
          title="O'xshash e'lonlar"
          items={similarAdsData}
          isLoading={isSimilarAdsLoading}
        />
      ) : null}
    </StyledAdInfo>
  );
};
export default AdInfo;
