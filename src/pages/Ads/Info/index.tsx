/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { IoMdHeart, IoIosArrowBack } from "react-icons/io";
import { formatNumbers } from "utils";
import {
  useGetAdByIdQuery,
  useGetAdsByUserQuery,
  useGetSimilarAdsQuery,
  useUpdateAdViewMutation,
} from "services/ad";
import { IAdHelmetAndGear, IAdMoto, IMotoAd } from "interfaces/responses";
import StyledAdInfo from "./style";
import { Text } from "components/Text";
import { Button } from "components/Button";
import ImageGallery from "components/ImageGallery";
import { Breadcrumb } from "antd";
import { routes } from "constants/routes";
import { useAppSelector } from "hooks";
import Carousel from "components/Carousel";

type TParams = {
  id: string;
};
const { HOME, MOTOCYCLES } = routes;
const AdInfo = () => {
  const { id } = useParams<TParams>();
  const user = useAppSelector(({ auth }) => auth.user);
  const [similiarAdsData, setSimiliarAdsData] = useState<
    IAdMoto[] | IAdHelmetAndGear[] | IMotoAd[]
  >([]);
  const [ownerAdsData, setOwnerAdsData] = useState<
    IAdMoto[] | IAdHelmetAndGear[] | IMotoAd[]
  >([]);
  const [adData, setadData] = useState<IAdMoto | IAdHelmetAndGear>();
  const [updateView, { data: viewData }] = useUpdateAdViewMutation();
  const { data, refetch } = useGetAdByIdQuery(id!);
  const { data: ownerAds, isLoading: isOwnerAdsLoading } = useGetAdsByUserQuery(
    {
      userId: adData?.owner._id ?? "",
      adId: adData?._id ?? "",
    }
  );
  const { data: similiarAds, isLoading: isSimiliarAdsLoading } =
    useGetSimilarAdsQuery({
      type: adData?.adType ?? "moto",
      id: adData?._id ?? "",
    });
  useEffect(() => {
    if (similiarAds) setSimiliarAdsData(similiarAds);
  }, [similiarAds]);
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
    if (data) setadData(data);
  }, [data]);
  useEffect(() => {
    if (ownerAds) setOwnerAdsData(ownerAds);
  }, [ownerAds]);
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
                  title: <Link to={MOTOCYCLES}>Barcha e'lonlar</Link>,
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
            {adData?.description}
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
                {adData?.likes} kishi yoqtirgan
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
                <Link to="/">
                  <Text size="lg" bold={400}>
                    {adData?.owner.name}
                  </Text>
                </Link>
                <Link to={"tel:" + adData?.owner.phone}>
                  <Text size="md" bold={400}>
                    +{adData?.owner.phone}
                  </Text>
                </Link>
              </div>
              <Link to={"tel:" + adData?.owner.phone}>
                <Button>Qo&apos;ng&apos;iroq qilish</Button>
              </Link>
            </div>
            <br />
            <ul className="labels">
              <li className="label">
                {adData?.adType === "moto"
                  ? "Ishlab chiqarilgan yili:"
                  : adData?.adType === "helmet"
                  ? "O'lchami"
                  : null}{" "}
                <Text size="md" bold={600}>
                  {adData?.adType === "moto"
                    ? (adData as IMotoAd).manufacturedAt
                    : adData?.adType === "helmet"
                    ? (adData as IAdHelmetAndGear).size
                    : null}
                </Text>
              </li>
              <li className="label">
                {adData?.adType === "moto"
                  ? "Bosgan masofasi: "
                  : adData?.adType === "helmet"
                  ? "Holati:  "
                  : null}{" "}
                <Text size="md" bold={600}>
                  {adData?.adType === "moto"
                    ? (adData as IMotoAd).mileage + " km"
                    : adData?.adType === "helmet"
                    ? (adData as IAdHelmetAndGear).condition
                    : null}
                </Text>
              </li>
              <li className="label">
                {adData?.adType === "moto"
                  ? "Turi: "
                  : adData?.adType === "helmet"
                  ? "Brand:  "
                  : null}{" "}
                <Text size="md" bold={600}>
                  {adData?.adType === "moto"
                    ? (adData as IMotoAd).category
                    : adData?.adType === "helmet"
                    ? (adData as IAdHelmetAndGear).brand
                    : null}
                </Text>
              </li>
              {adData?.adType === "moto" && (
                <li className="label">
                  {adData?.adType === "moto" ? "Dvigatel hajmi: " : null}{" "}
                  <Text size="md" bold={600}>
                    {adData?.adType === "moto"
                      ? (adData as IMotoAd).engineSize + " cc"
                      : null}
                  </Text>
                </li>
              )}
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
      <Carousel
        title="Muallifning boshqa e'lonlari"
        items={ownerAdsData}
        isLoading={isOwnerAdsLoading}
      />
      <Carousel
        title="O'xshash e'lonlar"
        items={similiarAdsData}
        isLoading={isSimiliarAdsLoading}
      />
    </StyledAdInfo>
  );
};
export default AdInfo;
