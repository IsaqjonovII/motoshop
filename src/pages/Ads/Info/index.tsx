import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetAdByIdQuery } from "services/ad";
import { IAdHelmetAndGear, IAdMoto } from "interfaces/responses";
import StyledAdInfo from "./style";

type TParams = {
  id: string;
};
const AdInfo = () => {
  const { id } = useParams<TParams>();
  const [adData, setadData] = useState<IAdMoto | IAdHelmetAndGear>();
  const { data, isLoading, error, isError, refetch } = useGetAdByIdQuery(id!);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) setadData(data);
  }, [data]);

  return (
    <StyledAdInfo>
      <div className="page__container">
        <div className="images">
        </div>

        <div className="content">
          <div className="content__head"></div>

          <div className="content__body"></div>
        </div>
      </div>
    </StyledAdInfo>
  );
};
export default AdInfo;
