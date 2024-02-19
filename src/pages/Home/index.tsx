import { Form, Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledHome from "./style";
import { IServerError } from "interfaces";
import { routes } from "constants/routes";
import { useGetAdsByCategoryQuery } from "services/ad";
import { IAdMoto, IAdHelmetAndGear } from "interfaces/responses";
import { condition, bikeTypes, engineCC, mileage, bikeColors } from "constants";
import Carousel from "components/Carousel";
import { Search } from "components/Search";
import { Button } from "components/Button";
import CustomSelect from "components/Select";

const { MOTOCYCLES } = routes;

const Home = () => {
  const navigate = useNavigate();
  const { data, isLoading, error, refetch } = useGetAdsByCategoryQuery("moto");
  const {
    data: helmets,
    isLoading: isHelmetsLoading,
    error: helmetError,
    refetch: refetchHelmets,
  } = useGetAdsByCategoryQuery("helmet");
  const [selectedEngine, setSelectedEngine] = useState("");
  const [searchedVal, setSearchedVal] = useState<string>("");
  const [selectedBikeTypes, setSelectedBikeTypes] = useState<string[]>([]);
  const [sportBikes, setSportBikes] = useState<IAdMoto[] | IAdHelmetAndGear[]>([]);
  const [helmetsData, setHelmetsData] = useState<IAdMoto[] | IAdHelmetAndGear[]>([]);
  const handleEngine = (val: string) => setSelectedEngine(val);
  const handleBikeTypesChange = (value: string[]) => setSelectedBikeTypes(value);
  const navigateToAds = () => {
    if (searchedVal.length) {
      navigate(`${MOTOCYCLES}?query=${searchedVal}`);
    } else if (selectedBikeTypes) {
      navigate(MOTOCYCLES + `${selectedBikeTypes && "?category=" + selectedBikeTypes}
      ${selectedEngine && "&engine=" + selectedEngine}
      ${selectedEngine && "&condition=" + selectedEngine}
      ${selectedEngine && "&mileage=" + selectedEngine}
      ${selectedEngine && "&color=" + selectedEngine}`);
    } else {
      navigate(MOTOCYCLES);
    }
  };
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
  }, [helmetError]);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    refetchHelmets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledHome>
      <div className="search__ads">
        <Form>
          <Search searchedVal={searchedVal} setSearchedVal={setSearchedVal} />
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

          <Button onClick={navigateToAds} type="submit">
            E'lonlarni ko'rsatish
          </Button>
        </Form>
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
