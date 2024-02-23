import { Text } from "components/Text";
import { useAppSelector } from "hooks";

const Ads = () => {
  const user = useAppSelector(state => state.auth.user);
  console.log(user);
  
  return (
    <div>
      <Text size="md" bold={600}>
        barcha elonlar
      </Text>
    </div>
  );
};
export default Ads;
