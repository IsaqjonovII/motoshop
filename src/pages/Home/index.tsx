import { Select } from "antd";
import { useEffect, useState } from "react";
import StyledHome from "./style";
import { IServerError } from "interfaces";
import { useGetAdsByCategoryQuery } from "services/ad";
import { IAdMoto, IAdHelmetAndGear } from "interfaces/responses";
import { condition, bikeTypes, engineCC, mileage, bikeColors } from "constants";
import Carousel from "components/Carousel";
import { Search } from "components/Search";
import CustomSelect from "components/Select";
import { Button } from "components/Button";

const Home = () => {
  const { data, isLoading, error, refetch } = useGetAdsByCategoryQuery("moto");
  const {
    data: helmets,
    isLoading: isHelmetsLoading,
    error: helmetError,
    refetch: refetchHelmets,
  } = useGetAdsByCategoryQuery("helmet");
  const [sportBikes, setSportBikes] = useState<IAdMoto[] | IAdHelmetAndGear[]>(
    []
  );
  const [helmetsData, setHelmetsData] = useState<
    IAdMoto[] | IAdHelmetAndGear[]
  >([]);
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
  useEffect(() => {
    if (data) setSportBikes(data);
    if (helmets) setHelmetsData(helmets);
  }, [data, helmets]);

  useEffect(() => {
    if (error) {
      const { status } = error as IServerError;
      if (status === "FETCH_ERROR") {
        console.log("Serverda xatolik. Iltimos birozdan so'ng urinib ko'ring");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  useEffect(() => {
    if (helmetError) {
      const { status } = helmetError as IServerError;
      if (status === "FETCH_ERROR") {
        console.log("Serverda xatolik. Iltimos birozdan so'ng urinib ko'ring");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [helmetError]);

  useEffect(() => {
    refetch();
    refetchHelmets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledHome>
      <div className="search__ads">
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

        <Button>E'lonlarni ko'rsatish</Button>
      </div>

      <section id="sportbikes" className="section">
        <Carousel
          title="Mototsikllar"
          items={sportBikes}
          isLoading={isLoading}
        />
      </section>
      <section id="helmets" className="section">
        <Carousel
          title="Shlem va Kiyimlar"
          items={helmetsData}
          isLoading={isHelmetsLoading}
        />
      </section>
    </StyledHome>
  );
};

export default Home;
