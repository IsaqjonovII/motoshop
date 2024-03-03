import { Empty, Pagination } from "antd";
import { useEffect, useState } from "react";
import { CardLoader } from "components/Loader";
import { useAppSelector, usePaginate } from "hooks";
import StyledTabs from "./style";
import { IAdHelmetAndGear, IAdMoto, IMotoAd } from "interfaces/responses";
import { useGetAdsByUserQuery } from "services/user";
import Card from "components/Card";
import { Link } from "react-router-dom";
import { Button } from "components/Button";
import { routes } from "constants/routes";

const { POST_MOTO } = routes;
const Ads = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [ads, setAds] = useState<IAdMoto[] | IMotoAd[] | IAdHelmetAndGear[]>([]);
  const { currentData, currentPage, handlePagination, setCurrentData } = usePaginate(ads);
  const { data, isLoading, error, refetch } = useGetAdsByUserQuery({ userId: user?._id ?? "" });

  useEffect(() => {
    if (data) setAds(data);
  }, [data]);

  useEffect(() => {
    if (ads.length > 0) {
      setCurrentData(ads.slice(0, 8));
    }
  }, [ads, setCurrentData]);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);
  useEffect(() => {
    refetch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) return <div className="carousel__loaders">
    <CardLoader isLoading={isLoading} />
    <CardLoader isLoading={isLoading} />
    <CardLoader isLoading={isLoading} />
  </div>;
  return (
    <StyledTabs>
      {ads.length <= 0 ? (
      <>
        <Empty description="Hech qanday ma'lumot topilmadi" />
        <br />
        <Link to={POST_MOTO}  style={{ textAlign: "center", display: "block" }}>
          <Button>E&apos;lon joylash</Button>
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
            total={ads.length}
          />
        </>
      )}
    </StyledTabs>
  );
};
export default Ads;
