import { useEffect, useState } from "react";
import { Spinner } from "components/Loader";
import { Text } from "components/Text";
import { useAppSelector } from "hooks";
import StyledTabs from "./style";
import { IAdHelmetAndGear, IAdMoto, IMotoAd } from "interfaces/responses";
import { useGetAdsByUserQuery } from "services/ad";
import { Empty } from "antd";
import Card from "components/Card";

const Ads = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [ads, setAds] = useState<IAdMoto[] | IMotoAd[] | IAdHelmetAndGear[]>([]);
  const { data, isLoading, error } = useGetAdsByUserQuery({ userId: user?._id ?? "" });

  useEffect(() => {
    if (data) setAds(data);
  }, [data]);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);
  if (isLoading) return <Spinner isLoading={isLoading} />;
  return (
    <StyledTabs>
      {!ads.length && (
        <Empty description={<Text size="md">Hech narsa topilmadi. :(</Text>} />
      )}
      <div className="ads__wrp">
        {ads.map((props) =><Card key={props._id} {...props} />)}
      </div>
    </StyledTabs>
  );
};
export default Ads;
