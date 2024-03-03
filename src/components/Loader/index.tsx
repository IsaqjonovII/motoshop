import { Skeleton } from "antd";
import { BiLoaderAlt } from "react-icons/bi";
export const Spinner = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div style={{ height: "100svh", display: "grid", placeItems: "center" }}>
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
