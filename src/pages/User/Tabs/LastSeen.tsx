import { Empty, Pagination } from "antd";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useAppSelector, usePaginate } from "hooks";
import { IServerError } from "interfaces";
import { useGetViewedAdsQuery } from "services/ad";
import { IAdHelmetAndGear, IAdMoto, IMotoAd } from "interfaces/responses";
import StyledTabs from "./style";
import Card from "components/Card";
import { Link } from "react-router-dom";
import { routes } from "constants/routes";
import { Button } from "components/Button";
import { Spinner } from "components/Loader";

const { ADS } = routes;
const ViewedAds = () => {
  const [viewedAds, setViewedAds] = useState<IAdMoto[] | IAdHelmetAndGear[] | IMotoAd[]>([]);
  const { currentData, currentPage, handlePagination, setCurrentData } = usePaginate(viewedAds);
  const userId = useAppSelector(({ auth }) => auth.user?._id);
  const { data, isLoading, error, isError, refetch } = useGetViewedAdsQuery(userId ?? "");

  useEffect(() => {
    if (data) setViewedAds(data);
    setCurrentData(viewedAds.slice(0, 8));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, viewedAds]);

  useEffect(() => {
    if (error) {
      const { data, status } = error as IServerError;
      if (data?.message) {
        toast.error(data.message);
      }
      if (isNaN(parseInt(status))) {
        toast.error("Serverda xatolik. Iltimos birozdan so'ng urinib ko'ring");
      }
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
      {viewedAds.length <= 0 || "message" in viewedAds  ? (
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
            total={viewedAds.length}
          />
        </>
      )}
    </StyledTabs>
  );
};
export default ViewedAds;
