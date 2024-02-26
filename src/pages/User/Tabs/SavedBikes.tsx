import { Empty } from "antd";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useAppSelector } from "hooks";
import { IServerError } from "interfaces";
import { useGetLikedAdsQuery } from "services/ad";
import { IAdHelmetAndGear, IAdMoto, IMotoAd } from "interfaces/responses";
import StyledTabs from "./style";
import Card from "components/Card";
import { Link } from "react-router-dom";
import { routes } from "constants/routes";
import { Button } from "components/Button";
import { Spinner } from "components/Loader";

const { ADS } = routes;
const LikedAds = () => {
  const [likedAds, setLikedAds] = useState<
    IAdMoto[] | IAdHelmetAndGear[] | IMotoAd[]
  >([]);
  const userId = useAppSelector(({ auth }) => auth.user?._id);
  const { data, isLoading, error, isError, refetch } = useGetLikedAdsQuery(
    userId ?? ""
  );

  useEffect(() => {
    if (data) setLikedAds(data);
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
      const { data, status } = error as IServerError;
      if (data?.message) {
        toast.error(data.message);
      }
      if (isNaN(parseInt(status))) {
        toast.error("Serverda xatolik. Iltimos birozdan so'ng urinib ko'ring");
      }
      console.log(error);
    }
  }, [error]);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function handleRefetch() {
    refetch();
  }

  if (isLoading) return <Spinner isLoading={isLoading} />;
  if (isError) return <div>{(error as IServerError).data?.message}</div>;
  return (
    <StyledTabs>
      {"message" in likedAds && (
        <>
          <Empty description={(likedAds as { message: string }).message} />
          <br />
          <Link to={ADS} style={{ textAlign: "center", display: "block" }}>
            <Button>Barcha e&apos;lonlar</Button>
          </Link>
        </>
      )}
      <div className="ads__wrp">
        {likedAds.length > 0 &&
          likedAds?.map((props) => (
            <Card key={props._id} {...props} refetch={handleRefetch} />
          ))}
      </div>
    </StyledTabs>
  );
};
export default LikedAds;
