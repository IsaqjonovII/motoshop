import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import { useEffect, useState } from "react";
import StyledAds from "./style";
import { IAdMoto, IAdHelmetAndGear } from "interfaces/responses";
import { useGetRandomAdsQuery } from "services/ad";
import { Text } from "components/Text";
import { AdCard } from "components/Card";
import { Search } from "components/Search";

const Ads = () => {
  const { data, refetch } = useGetRandomAdsQuery(30);
  const [randomAdsData, setRandomAdsData] = useState<
    IAdMoto[] | IAdHelmetAndGear[]
  >([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onPageChange: PaginationProps["onChange"] = (page) =>
    setCurrentPage(page);
  useEffect(() => {
    if (data) setRandomAdsData(data);
  }, [data]);
  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <StyledAds>
      <div className="ads__header">
        <Text size="xl" bold={600}>
          Barcha e'lonlarni shu yerdan topishingiz va qidirishingiz mumkin
        </Text>
      </div>
      <Search />
      
      <div className="ads__container">
        {randomAdsData.map((data) => (
          <AdCard key={data._id} {...data} />
        ))}
      </div>
      <div className="pagination__wrp">
        <Pagination
          current={currentPage}
          onChange={onPageChange}
          total={randomAdsData.length}
        />
      </div>
    </StyledAds>
  );
};
export default Ads;
