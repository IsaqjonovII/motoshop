import { Select, Pagination } from "antd";
import type { PaginationProps } from "antd";
import { CiFilter } from "react-icons/ci";
import { useEffect, useState } from "react";
import StyledAds from "./style";
import { IAd } from "interfaces/responses";
import { useGetRandomAdsQuery } from "services/ad";
import { bikeColors, bikeState, bikeTypes, engineCC, mileage } from "constants";
import { Text } from "components/Text";
import { Button } from "components/Button";
import CustomSelect from "components/Select";
import RecommendCard from "components/Card";

const Ads = () => {
  const { data, isLoading, error } = useGetRandomAdsQuery(30);
  const [randomAdsData, setRandomAdsData] = useState<IAd[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFiltersOpened, setisFiltersOpened] = useState<boolean>(false);
  const [selectedBikeTypes, setSelectedBikeTypes] = useState<string[]>([]);
  const [selectedEngine, setSelectedEngine] = useState("");
  const handleEngine = (val: string) => {
    setSelectedEngine(val);
  };
  const handleBikeTypesChange = (value: string[]) =>
    setSelectedBikeTypes(value);

  const onPageChange: PaginationProps["onChange"] = (page) =>
    setCurrentPage(page);
  useEffect(() => {
    if (data) setRandomAdsData(data);
  }, [data]);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);
  return (
    <StyledAds>
      <div className="ads__header">
        <Text size="xl" bold={600}>
          E'lonlar
        </Text>

        <Button onClick={() => setisFiltersOpened(!isFiltersOpened)}>
          Filter
          <CiFilter className="icon" />
        </Button>
      </div>
      {isFiltersOpened && (
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
              options={bikeState}
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
          <CustomSelect
            onChange={handleBikeTypesChange}
            mode="multiple"
            options={bikeTypes}
            placeholder="Mototsikl turlarini tanlang"
          />
        </div>
      )}
      <div className="ads__container">
        {randomAdsData.map((data) => (
          <RecommendCard key={data._id} {...data} />
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
