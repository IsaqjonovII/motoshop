/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";
import { formatNumbers } from "utils";
import { useGetAdByIdQuery } from "services/ad";
import { IAdHelmetAndGear, IAdMoto, IMotoAd } from "interfaces/responses";
import StyledAdInfo from "./style";
import { Text } from "components/Text";
import { Button } from "components/Button";

type TParams = {
  id: string;
};
const AdInfo = () => {
  const { id } = useParams<TParams>();
  const [adData, setadData] = useState<IAdMoto | IAdHelmetAndGear>();
  const { data, isLoading, error, refetch } = useGetAdByIdQuery(id!);
  console.log(isLoading, error);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) setadData(data);
  }, [data]);

  return (
    <StyledAdInfo>
      <div className="page__container">
        <div className="images"></div>

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
              <Link to={"tel:" + adData?.owner.phone}>
                <Button>Qo&apos;ng&apos;iroq qilish</Button>
              </Link>
            </div>
            <br />
            <ul>
              <li className="body__list">
                {adData?.adType === "moto"
                  ? "Ishlab chiqarilgan yili:"
                  : adData?.adType === "gear"
                  ? "O'lchami"
                  : null}{" "}
                <Text size="md" bold={600}>
                  {adData?.adType === "moto"
                    ? (adData as IMotoAd).manufacturedAt
                    : adData?.adType === "gear"
                    ? (adData as IAdHelmetAndGear).size
                    : null}
                </Text>
              </li>
              <li className="body__list">
                {adData?.adType === "moto"
                  ? "Bosgan masofasi: "
                  : adData?.adType === "gear"
                  ? "Holati:  "
                  : null}{" "}
                <Text size="md" bold={600}>
                  {adData?.adType === "moto"
                    ? (adData as IMotoAd).mileage + " km"
                    : adData?.adType === "gear"
                    ? (adData as IAdHelmetAndGear).condition
                    : null}
                </Text>
              </li>
              <li className="body__list">
                {adData?.adType === "moto"
                  ? "Turi: "
                  : adData?.adType === "gear"
                  ? "Brand:  "
                  : null}{" "}
                <Text size="md" bold={600}>
                  {adData?.adType === "moto"
                    ? (adData as IMotoAd).category
                    : adData?.adType === "gear"
                    ? (adData as IAdHelmetAndGear).brand
                    : null}
                </Text>
              </li>
              <li className="body__list">
                {adData?.adType === "moto"
                  ? "Dvigatel hajmi: "
                  : adData?.adType === "gear"
                  ? "Rangi:  "
                  : null}{" "}
                <Text size="md" bold={600}>
                  {adData?.adType === "moto"
                    ? (adData as IMotoAd).engineSize + " cc"
                    : adData?.adType === "gear"
                    ? (adData as IAdHelmetAndGear).color
                    : null}
                </Text>
              </li>
              <li className="body__list">
                Rangi:{" "}
                <Text size="md" bold={600}>
                  {adData?.color}
                </Text>
              </li>
            </ul>
            <br />
            <Text size="md" bold={400}>
              {adData?.description}
            </Text>
          </div>
        </div>
      </div>
    </StyledAdInfo>
  );
};
export default AdInfo;
