import { useAppSelector } from "hooks";
import { IAdHelmetAndGear, IAdMoto, IMotoAd } from "interfaces/responses";
import { useEffect, useState } from "react";
import { useGetLikedAdsQuery } from "services/ad";
import { IServerError } from "interfaces";
import { toast } from "react-toastify";
import Card from "components/Card";
import { Empty } from "antd";
import { Link } from "react-router-dom";
import { routes } from "constants/routes";
import { Button } from "components/Button";

const { MOTOCYCLES } = routes;
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
  });

  if (isLoading) return <div>Loading please wait bro</div>;
  if (isError) return <div>{(error as IServerError).data?.message}</div>;
  return (
    <div>
      {"message" in likedAds && (
        <>
          <Empty description={(likedAds as { message: string }).message} />
          <br />
          <Link
            to={MOTOCYCLES}
            style={{ textAlign: "center", display: "block" }}
          >
            <Button>Barcha e&apos;lonlar</Button>
          </Link>
        </>
      )}
      {likedAds.length > 0 &&
        likedAds?.map((props) => <Card key={props._id} {...props} />)}
    </div>
  );
};
export default LikedAds;
