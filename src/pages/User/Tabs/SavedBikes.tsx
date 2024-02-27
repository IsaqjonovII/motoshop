import { Empty, Pagination } from "antd";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useAppSelector, usePaginate } from "hooks";
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
  const [likedAds, setLikedAds] = useState<IAdMoto[] | IAdHelmetAndGear[] | IMotoAd[]>([]);
  const { currentData, currentPage, handlePagination, setCurrentData } = usePaginate(likedAds);
  const userId = useAppSelector(({ auth }) => auth.user?._id);
  const likedAdsStore = useAppSelector(({ likedProducts }) => likedProducts);
  const { data, isLoading, error, isError, refetch } = useGetLikedAdsQuery(userId ?? "");

  useEffect(() => {
    if (data) setLikedAds(data);
  }, [data]);
  useEffect(() => {
    if (likedAds.length > 0) {
      setCurrentData(likedAds.slice(0, 8));
    }
  }, [likedAds, setCurrentData]);

  useEffect(() => {
    refetch();
    if (likedAds.length > 0) {
      setCurrentData(likedAds.slice(0, 8));
    }
  }, [likedAds, likedAdsStore, refetch, setCurrentData]);

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

  if (isLoading) return <Spinner isLoading={isLoading} />;
  if (isError) return <div>{(error as IServerError).data?.message}</div>;
  return (
    <StyledTabs>
      {likedAds.length <= 0 || "message" in likedAds ? (
        <>
          <Empty description="Hech qanday ma'lumot topilmadi" />
          <br />
          <Link to={ADS} style={{ textAlign: "center", display: "block" }}>
            <Button>Barcha e&apos;lonlar</Button>
          </Link>
        </>
      ) : (
        <>
          <div className="ads__wrp">
            {currentData.length > 0 &&
              currentData?.map((props) => <Card key={props._id} {...props} />)}
          </div>
          <br />

          <Pagination
            pageSize={8}
            current={currentPage}
            onChange={handlePagination}
            total={likedAds.length}
          />
        </>
      )}
    </StyledTabs>
  );
};
export default LikedAds;
