import { Select, Pagination } from "antd";
import type { PaginationProps } from "antd";
import { useEffect, useState } from "react";
import StyledAds from "./style";
import { IAdMoto, IAdHelmetAndGear } from "interfaces/responses";
import { useGetRandomAdsQuery } from "services/ad";
import { condition, bikeTypes, engineCC, mileage, bikeColors } from "constants";
import { Text } from "components/Text";
import CustomSelect from "components/Select";
import { AdCard } from "components/Card";
import { Search } from "components/Search";

const Ads = () => {
  const { data, refetch } = useGetRandomAdsQuery(30);
  const [randomAdsData, setRandomAdsData] = useState<
    IAdMoto[] | IAdHelmetAndGear[]
  >([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedBikeTypes, setSelectedBikeTypes] = useState<string[]>([]);
  const [selectedEngine, setSelectedEngine] = useState("");
  const handleEngine = (val: string) => {
    setSelectedEngine(val);
  };
  const handleBikeTypesChange = (value: string[]) =>
    setSelectedBikeTypes(value);
  if (selectedBikeTypes && selectedEngine) {
    // nothing here
  }
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
