import { Empty, Pagination } from "antd";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useAppSelector } from "hooks";
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
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentPageData, setCurrentPageData] = useState<IAdMoto[] | IAdHelmetAndGear[]>([]);
  const [viewedAds, setViewedAds] = useState<IAdMoto[] | IAdHelmetAndGear[] | IMotoAd[]>([]);
  const userId = useAppSelector(({ auth }) => auth.user?._id);
  const { data, isLoading, error, isError, refetch } = useGetViewedAdsQuery(
    userId ?? ""
  );

  function handlePagination(pageNum: number) {
    const startIndex: number = (pageNum - 1) * 10;
    const endIndex: number = startIndex + 10;
    setCurrentPage(pageNum);
    const data = viewedAds.slice(startIndex, endIndex);
    setCurrentPageData(data);
  }
  useEffect(() => {
    if (data) setViewedAds(data);
  }, [data]);

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
      {"message" in viewedAds && (
        <>
          <Empty description={(viewedAds as { message: string }).message} />
          <br />
          <Link to={ADS} style={{ textAlign: "center", display: "block" }}>
            <Button>Barcha e&apos;lonlar</Button>
          </Link>
        </>
      )}
      <div className="ads__wrp">
        {viewedAds.length > 0 &&
          currentPageData.map((props) => <Card key={props._id} {...props} />)}
      </div>

      <Pagination
        current={currentPage}
        total={viewedAds.length}
        pageSize={10}
        onChange={handlePagination}
      />
    </StyledTabs>
  );
};
export default ViewedAds;
