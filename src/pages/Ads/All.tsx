import { Empty, Pagination } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { condition, bikeTypes, engineCC, mileage, bikeColors } from "constants";
// import CustomSelect from "components/Select";
import StyledAds from "./style";
import { usePaginate } from "hooks";
import { useGetRandomAdsQuery, useGetSearchedDataQuery } from "services/ad";
import { IAdMoto, IAdHelmetAndGear, IMotoAd } from "interfaces/responses";
import Card from "components/Card";
import { Text } from "components/Text";
import { CardLoader } from "components/Loader";
import { IServerError } from "interfaces";
import { toast } from "react-toastify";

const Ads = () => {
  const { data, refetch } = useGetRandomAdsQuery(10);
  const [searchParams] = useSearchParams();
  const [searchedResults, setSearchedResults] = useState<IAdMoto[] | IAdHelmetAndGear[] | IMotoAd[]>([]);
  const [randomAdsData, setRandomAdsData] = useState<IAdMoto[] | IAdHelmetAndGear[] | IMotoAd[]>([]);

  const query = searchParams.get("s_query");
  const { data: searchedData, error, isLoading, refetch: searchRefetch } = useGetSearchedDataQuery(query ?? "", { skip: query?.length === 0 });
  const { handlePagination, currentData, currentPage, setCurrentData } = usePaginate(randomAdsData);

  useEffect(() => {
    searchRefetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    if (searchedData?.length) setSearchedResults(searchedData);
  }, [searchedData]);

  useEffect(() => {
    if (data) setRandomAdsData(data);
    if (randomAdsData.length > 0) setCurrentData(randomAdsData.slice(0, 8));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, randomAdsData]);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //change window title
  useEffect(() => {
    if(searchParams.get("s_query")){
      document.title = searchParams.get("s_query") + " bo'yicha natijalar";
    } else {
      document.title = "Barcha e'lonlar | MOTOSHOP"
    }
  }, [searchParams]);

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

  return (
    <StyledAds>
      {searchParams.get("s_query") && (
        <>
          <Text size="md" bold={600}>
            Qidiruvingiz bo&apos;yicha natijalar
          </Text>
          <br />
          {isLoading && (
            <div className="carousel__loaders">
              <CardLoader isLoading={isLoading} />
              <CardLoader isLoading={isLoading} />
              <CardLoader isLoading={isLoading} />
              <CardLoader isLoading={isLoading} />
            </div>
          )}
          {searchedResults.length <= 0 ? (
            <Empty description="Hech qanday ma'lumot topilmadi :(" />
          ) : (
            <>
              <div className="searchedAds ads__container">
                {searchedResults.map((data) => (
                  <Card key={data._id} {...data} />
                ))}
              </div>
              <div className="pagination__wrp">
                <Pagination
                  current={currentPage}
                  onChange={handlePagination}
                  total={searchedResults.length}
                />
              </div>
            </>
          )}
        </>
      )}
      {/* 
      <div className="filters__wrp">
            <CustomSelect
              mode="multiple"
              onChange={handleBikeTypesChange}
              options={bikeTypes}
              placeholder="Mototsikl turlarini tanlang"
            />
            <div className="filter">
              <Select
                defaultValue="barchasi"
                options={condition}
                onChange={handleEngine}
                placeholder="Mototsikl holati"
              />
            </div>
            <div className="filter">
              <Select
                defaultValue="50-250"
                options={engineCC}
                onChange={handleEngine}
                placeholder="Dvigatel hajmi"
              />
            </div>
            <div className="filter">
              <Select
                defaultValue="0-1000"
                options={mileage}
                onChange={handleEngine}
                placeholder="Dvigatel hajmi"
              />
            </div>
            <CustomSelect
              mode="multiple"
              onChange={handleBikeTypesChange}
              options={bikeColors}
              placeholder="Mototsikl rangini tanlang"
            />
          </div>
      */}
      <br />
      <br />
      <br />
      <Text size="md" bold={600}>
        {searchParams.get("s_query") ? "Boshqa e'lonlar" : "Barcha e'lonlar"}
      </Text>
      <br />
      <div className="ads__container">
        {currentData.map((data) => (
          <Card key={data._id} {...data} />
        ))}
      </div>
    </StyledAds>
  );
};
export default Ads;
