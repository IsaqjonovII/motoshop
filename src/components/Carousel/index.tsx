import Glider from "react-glider";
import "glider-js/glider.min.css";
import { carouselOptions } from "constants";

type props = {
  data: any[];
};
export const Carousel = ({ data }: props) => {
  return (
    <Glider draggable hasArrows responsive={carouselOptions}>
      {data.map(({ _id }) => (
        <h1 key={_id}>{_id}</h1>
      ))}
    </Glider>
  );
};
