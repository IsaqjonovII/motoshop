import { Form } from "antd";
import { useEffect, useState } from "react";
import StyledHome from "./style";
import { IServerError } from "interfaces";
import { useGetAdsByCategoryQuery } from "services/ad";
import { IAdMoto, IAdHelmetAndGear } from "interfaces/responses";
import Carousel from "components/Carousel";
import { Search } from "components/Search";

const Home = () => {
  const { data, isLoading, error, refetch } = useGetAdsByCategoryQuery("moto");
  const { data: helmets, isLoading: isHelmetsLoading, error: helmetError, refetch: refetchHelmets } = useGetAdsByCategoryQuery("helmet");
  const [searchedVal, setSearchedVal] = useState<string>("");
  const [sportBikes, setSportBikes] = useState<IAdMoto[] | IAdHelmetAndGear[]>([]);
  const [helmetsData, setHelmetsData] = useState<IAdMoto[] | IAdHelmetAndGear[]>([]);

  useEffect(() => {
    if (data) setSportBikes(data);
  }, [data]);
  
  useEffect(() => {
    if (helmets) setHelmetsData(helmets);
  }, [helmets]);

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
  useEffect(() => {
    document.title = "Asosiy sahifa | Motoshop.uz"
  }, [])

  return (
    <StyledHome>
      <div className="search__ads">
        <Form>
          <Search
            searchedVal={searchedVal}
            setSearchedVal={setSearchedVal}
            hasButton
          />
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
