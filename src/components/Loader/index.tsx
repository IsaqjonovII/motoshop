import { Skeleton } from "antd";
import { BiLoaderAlt } from "react-icons/bi";
export const Spinner = ({
  isLoading,
  fixed,
}: {
  isLoading: boolean;
  fixed?: boolean;
}) => {
  return (
    <div className={fixed ? "fixed-position page-spinner" : "page-spinner"}>
      <BiLoaderAlt className={isLoading ? "icon spinning" : "icon"} />
    </div>
  );
};

export function CardLoader({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="loader">
      <Skeleton.Image active={isLoading}></Skeleton.Image>
      <br />
      <Skeleton active={isLoading}></Skeleton>
    </div>
  );
}
