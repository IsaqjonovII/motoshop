import { BiLoaderAlt } from "react-icons/bi";
export const Spinner = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div style={{ height: "100svh", display: "grid", placeItems: "center" }}>
      <BiLoaderAlt className={isLoading ? "icon spinning" : "icon"} />
    </div>
  );
};