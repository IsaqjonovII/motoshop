import { loader } from "assets";
import LazyImage from "components/LazyImage";
import { Text } from "components/Text";
import { ISpinner } from "interfaces/components";

const Loader = () => {
  return <div>Loader</div>;
};

export default Loader;

export const Spinner = ({ isLoading, loadingText }: ISpinner) => {
  return (
    <div className={isLoading ? "loader active__loader" : "loader"}>
      <LazyImage className="" src={loader} alt="" />
      <Text size="md" bold={400}>
        {loadingText}
      </Text>
    </div>
  );
};
