import { Empty, Pagination } from "antd";
import { useEffect, useState } from "react";
import { Spinner } from "components/Loader";
import { useAppSelector, usePaginate } from "hooks";
import StyledTabs from "./style";
import { IAdHelmetAndGear, IAdMoto, IMotoAd } from "interfaces/responses";
import { useGetAdsByUserQuery } from "services/ad";
import Card from "components/Card";

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

  if (isLoading) return <Spinner isLoading={isLoading} />;
  return (
    <StyledTabs>
      {ads.length < 0 ? (
        <Empty description="Hech qanday ma'lumot topilmadi" />
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
