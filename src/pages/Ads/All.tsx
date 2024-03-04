import { Empty, Pagination } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { condition, bikeTypes, engineCC, mileage, bikeColors } from "constants";
// import CustomSelect from "components/Select";
import StyledAds from "./style";
import { useGetRandomAdsQuery, useGetSearchedDataQuery } from "services/ad";
import { IAdMoto, IAdHelmetAndGear } from "interfaces/responses";
import Card from "components/Card";
import { Text } from "components/Text";
import { usePaginate } from "hooks";

const Ads = () => {
  const { data, refetch } = useGetRandomAdsQuery(30);
  const [searchParams] = useSearchParams();
  const [randomAdsData, setRandomAdsData] = useState<IAdMoto[] | IAdHelmetAndGear[]>([]);
  
  const query = searchParams.get("s_query");  
  const {data: searchedData, error, isLoading, refetch: searchRefetch } = useGetSearchedDataQuery(query ?? "", { skip: query?.length === 0 });
  const { handlePagination, currentData, currentPage, setCurrentData } = usePaginate(randomAdsData);

  useEffect(() => {
    searchRefetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    if(searchedData){
      console.log(searchedData)
    }
  }, [searchedData])
  useEffect(() => {
    if (data) setRandomAdsData(data);
    if (randomAdsData.length > 0) setCurrentData(randomAdsData.slice(0, 8));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, randomAdsData]);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledAds>
      <div className="ads__header">
        <Text size="xl" bold={600}> 
            Barcha e&apos;lonlar
        </Text>
      </div>

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

      <div className="ads__container">
        {currentData.map((data) => (
          <Card key={data._id} {...data} />
        ))}
      </div>
      {currentData.length <= 0 ? (
        <Empty description="Hech qanday ma'lumot topilmadi :(" />
      ) : (
        <div className="pagination__wrp">
          <Pagination
            current={currentPage}
            onChange={handlePagination}
            total={randomAdsData.length}
          />
        </div>
      )}
    </StyledAds>
  );
};
export default Ads;
